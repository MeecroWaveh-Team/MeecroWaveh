import { map } from './map.js'
/************************************************
 * Tracks user position and draws a circle at that position
 **************************************************/

// Declare variables to store marker and accuracy circle
let userMarker;
let userCircle;

// Define the success handler for when a location is found
function onLocationFound(e) {
    const radius = e.accuracy/2;

    // If the marker doesn't exist yet, create it
    if (!userMarker) {
        // Sets the size of the icon
        const gpsIconSize = [16, 16]

        var gpsIcon = L.icon({
            iconUrl: 'images/gps_icon.png',
            iconSize: gpsIconSize,
            iconAnchor: gpsIconSize/2,
            popupAnchor: [-3,-76]
        });
        userMarker = L.marker(e.latlng, {icon: gpsIcon}).addTo(map);

        userCircle = L.circle(e.latlng, radius).addTo(map);
    } else {
        // If it already exists, simply move it to the new coordinates
        userMarker.setLatLng(e.latlng);
        userCircle.setLatLng(e.latlng);
        userCircle.setRadius(radius);
    }
}

// Define the error handler if geolocation is denied or fails
function onLocationError(e) {
    alert(e.message);
}

// Attach the event listeners to the map
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Start continuous tracking
map.locate({
    watch:true,         // Continuous watching of the user's position
    enableHighAccuracy:true // Forces the browser to seek a precise GPS fix
})