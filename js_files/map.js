var map = L.map('map').setView([43.816046, -111.783228], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    maxNativeZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var floor1Image = L.tileLayer('https://mapwarper.net/maps/tile/107450/{z}/{x}/{y}.png', {
    minZoom: 18,  
    maxZoom: 21,  
    opacity: 0.85,
    attribution: '&copy; MapWarper'
});

var floor2Image = L.tileLayer('https://mapwarper.net/maps/tile/107398/{z}/{x}/{y}.png', {
    minZoom: 18,  
    maxZoom: 21,  
    opacity: 0.85,
    attribution: '&copy; MapWarper'
});

var floor3Image = L.tileLayer('https://mapwarper.net/maps/tile/107451/{z}/{x}/{y}.png', {
    minZoom: 18,  
    maxZoom: 21,  
    opacity: 0.85,
    attribution: '&copy; MapWarper'
});

var floor1Group = L.layerGroup([
    floor1Image, 
    L.marker([43.814467, -111.784851]).bindPopup("<b>STC Floor 1:</b> Microwave near the Crossroads")
]);

var floor2Group = L.layerGroup([
    floor2Image, 
    L.marker([43.814498, -111.784423]).bindPopup("<b>STC Floor 2:</b> Printer Lab")
]);

var floor3Group = L.layerGroup([
    floor3Image,
    L.marker([43.814769, -111.785001]).bindPopup("<b>STC Floor 3:</b> Vending Machine / Microwave")
]);

var floorLayers = {
    "Floor 3": floor3Group,
    "Floor 2": floor2Group,
    "Floor 1": floor1Group
};
L.control.layers(floorLayers, null, { collapsed: false }).addTo(map);

map.on('zoomend', function() {
    var currentZoom = map.getZoom();
    
    if (currentZoom < 18) { 
        if (map.hasLayer(floor1Group)) map.removeLayer(floor1Group);
        if (map.hasLayer(floor2Group)) map.removeLayer(floor2Group);
        if (map.hasLayer(floor3Group)) map.removeLayer(floor3Group);
    } else {
        if (!map.hasLayer(floor1Group) && !map.hasLayer(floor2Group) && !map.hasLayer(floor3Group)) {
            floor1Group.addTo(map);
            
            var layerControlElement = document.querySelector('.leaflet-control-layers-selector[type="radio"]:last-child');
            if (layerControlElement) layerControlElement.checked = true;
        }
    }
});

/*var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Clicked Coord: <code>[" + e.latlng.lat.toFixed(6) + ", " + e.latlng.lng.toFixed(6) + "]</code>")
        .openOn(map);
}
map.on('click', onMapClick);*/