import json
import mimetypes
import os
import smtplib
from email.message import EmailMessage
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
HOST = os.environ.get("HOST", "127.0.0.1")
PORT = int(os.environ.get("PORT", "8000"))
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
SMTP_FROM = os.environ.get("SMTP_FROM", SMTP_USER or "contactmeecrowaveh@gmail.com")
SMTP_TO = os.environ.get("SMTP_TO", "contactmeecrowaveh@gmail.com")


class ReviewHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path == "/api/reviews":
            self._send_json({"status": "ok"}, HTTPStatus.OK)
            return

        if parsed_path.path in {"", "/"}:
            target_path = ROOT / "index.html"
        else:
            target_path = (ROOT / parsed_path.path.lstrip("/")).resolve()

        if not str(target_path).startswith(str(ROOT)):
            self._send_text("Forbidden", HTTPStatus.FORBIDDEN)
            return

        if target_path.is_dir():
            target_path = target_path / "index.html"

        if not target_path.exists():
            self._send_text("Not Found", HTTPStatus.NOT_FOUND)
            return

        content = target_path.read_bytes()
        content_type = mimetypes.guess_type(str(target_path))[0] or "application/octet-stream"
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_POST(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path != "/api/reviews":
            self._send_json({"error": "Not found"}, HTTPStatus.NOT_FOUND)
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(content_length).decode("utf-8") if content_length else ""

        try:
            payload = json.loads(body) if body else {}
        except json.JSONDecodeError:
            self._send_json({"error": "Invalid JSON"}, HTTPStatus.BAD_REQUEST)
            return

        review_text = (payload.get("review") or "").strip()
        microwave_id = payload.get("microwaveId")
        location = payload.get("location") or "Unknown"
        building_id = payload.get("buildingId") or "Unknown"

        if not review_text or microwave_id is None:
            self._send_json({"error": "Missing review text or microwave selection"}, HTTPStatus.BAD_REQUEST)
            return

        if not SMTP_USER or not SMTP_PASS:
            self._send_json({"error": "SMTP credentials are not configured on the server"}, HTTPStatus.INTERNAL_SERVER_ERROR)
            return

        message = EmailMessage()
        message["From"] = SMTP_FROM
        message["To"] = SMTP_TO
        message["Subject"] = f"Microwave review for #{microwave_id}"
        message.set_content(
            "\n".join(
                [
                    f"Microwave ID: {microwave_id}",
                    f"Location: {location}",
                    f"Building ID: {building_id}",
                    "",
                    review_text,
                ]
            )
        )

        try:
            with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
                server.starttls()
                server.login(SMTP_USER, SMTP_PASS)
                server.send_message(message)
        except Exception as exc:  # noqa: BLE001
            self._send_json({"error": f"Failed to send review: {exc}"}, HTTPStatus.INTERNAL_SERVER_ERROR)
            return

        self._send_json({"status": "sent"}, HTTPStatus.OK)

    def log_message(self, format, *args):
        return

    def _send_json(self, payload, status):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_text(self, message, status):
        body = message.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), ReviewHandler)
    print(f"Serving MeecroWaveh at http://{HOST}:{PORT}")
    print("Set SMTP_USER, SMTP_PASS, and optionally SMTP_FROM/SMTP_TO environment variables before submitting reviews.")
    server.serve_forever()
