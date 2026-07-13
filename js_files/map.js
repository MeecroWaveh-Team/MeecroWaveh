import { buildings, microwaves, printers, vending_machines, rooms, addReview } from '../database/database.js';
 
const reviewContainer = document.getElementById('review_contatiner');
const reviewHeading = document.getElementById('Review');
const reviewTargetDetails = document.getElementById('review_target_details');
const reviewTargetId = document.getElementById('review-target-id');
const reviewForm = reviewContainer?.querySelector('form');
const reviewTextarea = document.getElementById('user-review');
let activeReviewMicrowave = null;

function updateReviewTarget(microwave) {
    activeReviewMicrowave = microwave;

    if (!reviewHeading || !reviewTargetDetails || !reviewTargetId) {
        return;
    }

    if (microwave) {
        reviewHeading.textContent = `Leave a review for Microwave #${microwave.microwave_id}`;
        reviewTargetDetails.textContent = `${microwave.location_description || 'Location unknown'} • Building ${microwave.building_id}`;
        reviewTargetId.value = microwave.microwave_id;
    } else {
        reviewHeading.textContent = 'Select a microwave on the map';
        reviewTargetDetails.textContent = 'Choose a microwave marker to connect your review to that location.';
        reviewTargetId.value = '';
    }
}

if (reviewForm) {
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!activeReviewMicrowave) {
            if (reviewTargetDetails) {
                reviewTargetDetails.textContent = 'Select a microwave on the map before submitting your review.';
            }
            return;
        }

        const reviewText = reviewTextarea?.value.trim() || '';
        const emailAddress = 'contactmeecrowaveh@gmail.com';
        const subject = `Microwave review for #${activeReviewMicrowave.microwave_id}`;
        const body = [
            `Microwave ID: ${activeReviewMicrowave.microwave_id}`,
            `Location: ${activeReviewMicrowave.location_description || 'Unknown'}`,
            `Building ID: ${activeReviewMicrowave.building_id}`,
            '',
            reviewText
        ].join('\n');

        addReview('microwaves', activeReviewMicrowave.microwave_id, 5, reviewText);

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        if (reviewTargetDetails) {
            reviewTargetDetails.textContent = `Review drafted for Microwave #${activeReviewMicrowave.microwave_id}.`;
        }

        if (reviewTextarea) {
            reviewTextarea.value = '';
        }
    });
}
 
// ==========================================
// 1. INITIALIZE MAP ON CAMPUS (Must happen FIRST)
// ==========================================
export const map = L.map('map').setView([43.8175, -111.7826], 16);
 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    maxNativeZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 
// --- HELPER FUNCTION FOR DATA TRACKING ---
function hasItems(item_array) {
    let id_list = [];
    let count = 0;
 
    for (const element of item_array) {
        id_list[count] = element.building_id;
        count++;
    }
    let s = new Set(id_list);
    let returnList = [...s];
 
    return returnList;
}
 
// Keep the database tracking arrays up here safely
var building_markers = null;
const items = [microwaves, printers, vending_machines];

// Safely extract building IDs that contain items
var buildings_with_items = [hasItems(items[0])]; 

// Use standard modern array filtering instead of manual nested counters (prevents freezing)
var buildings_with_microwaves = buildings.filter(building => 
    buildings_with_items[0].includes(building.building_id)
);
 
var currentControl = null;
 
// ==========================================
// 2. DEFINE MAPWARPER ASSETS BY BUILDING
// ==========================================
 
// --- STC Building Layers ---
var stc1 = L.tileLayer('https://mapwarper.net/maps/tile/107450/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var stc2 = L.tileLayer('https://mapwarper.net/maps/tile/107398/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var stc3 = L.tileLayer('https://mapwarper.net/maps/tile/107451/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var stcFloor1Group = L.layerGroup([stc1]);
var stcFloor2Group = L.layerGroup([stc2]);
var stcFloor3Group = L.layerGroup([stc3]);
 
// --- Austin Building Layers ---
var austin1 = L.tileLayer('https://mapwarper.net/maps/tile/107716/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var austin2 = L.tileLayer('https://mapwarper.net/maps/tile/107981/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var austinFloor1Group = L.layerGroup([austin1]);
var austinFloor2Group = L.layerGroup([austin2]);
 
// --- Agricultural Engineering Layers ---
var agEng1 = L.tileLayer('https://mapwarper.net/maps/tile/107982/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var agEng2 = L.tileLayer('https://mapwarper.net/maps/tile/107984/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var agEngFloor1Group = L.layerGroup([agEng1]);
var agEngFloor2Group = L.layerGroup([agEng2]);
 
// --- Engineering Technology Layers ---
var engTech1 = L.tileLayer('https://mapwarper.net/maps/tile/107985/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var engTech2 = L.tileLayer('https://mapwarper.net/maps/tile/107986/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var engTechFloor1Group = L.layerGroup([engTech1]);
var engTechFloor2Group = L.layerGroup([engTech2]);
 
// --- Manwavering Center Layers ---
var manwavering1 = L.tileLayer('https://mapwarper.net/maps/tile/108010/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var manwavering2 = L.tileLayer('https://mapwarper.net/maps/tile/108012/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var manwavering3 = L.tileLayer('https://mapwarper.net/maps/tile/108013/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var manwaveringFloor1Group = L.layerGroup([manwavering1]);
var manwaveringFloor2Group = L.layerGroup([manwavering2]);
var manwaveringFloor3Group = L.layerGroup([manwavering3]);
 
// --- Smith Layers ---
var smith1 = L.tileLayer('https://mapwarper.net/maps/tile/108529/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var smith2 = L.tileLayer('https://mapwarper.net/maps/tile/108530/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var smith3 = L.tileLayer('https://mapwarper.net/maps/tile/108531/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var smith4 = L.tileLayer('https://mapwarper.net/maps/tile/108532/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var smithFloor1Group = L.layerGroup([smith1]);
var smithFloor2Group = L.layerGroup([smith2]);
var smithFloor3Group = L.layerGroup([smith3]);
var smithFloor4Group = L.layerGroup([smith4]);
 
// --- McKay Library Layers ---
var mckay1 = L.tileLayer('https://mapwarper.net/maps/tile/108568/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var mckay2 = L.tileLayer('https://mapwarper.net/maps/tile/108569/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var mckay3 = L.tileLayer('https://mapwarper.net/maps/tile/108570/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var mckayFloor1Group = L.layerGroup([mckay1]);
var mckayFloor2Group = L.layerGroup([mckay2]);
var mckayFloor3Group = L.layerGroup([mckay3]);
 
// --- Hart Layers ---
var hart1 = L.tileLayer('https://mapwarper.net/maps/tile/108571/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var hart2 = L.tileLayer('https://mapwarper.net/maps/tile/108572/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var hart3 = L.tileLayer('https://mapwarper.net/maps/tile/108573/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var hartFloor1Group = L.layerGroup([hart1]);
var hartFloor2Group = L.layerGroup([hart2]);
var hartFloor3Group = L.layerGroup([hart3]);
 
// --- Romney Layers ---
var romney1 = L.tileLayer('https://mapwarper.net/maps/tile/108574/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var romney2 = L.tileLayer('https://mapwarper.net/maps/tile/108575/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var romneyFloor1Group = L.layerGroup([romney1]);
var romneyFloor2Group = L.layerGroup([romney2]);
 
// --- Clarke Layers ---
var clarke1 = L.tileLayer('https://mapwarper.net/maps/tile/108576/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var clarke2 = L.tileLayer('https://mapwarper.net/maps/tile/108577/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var clarke3 = L.tileLayer('https://mapwarper.net/maps/tile/108578/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var clarkeFloor1Group = L.layerGroup([clarke1]);
var clarkeFloor2Group = L.layerGroup([clarke2]);
var clarkeFloor3Group = L.layerGroup([clarke3]);
 
// --- Spori Layers ---
var spori1 = L.tileLayer('https://mapwarper.net/maps/tile/108579/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var spori2 = L.tileLayer('https://mapwarper.net/maps/tile/108580/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var spori3 = L.tileLayer('https://mapwarper.net/maps/tile/108581/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var sporiFloor1Group = L.layerGroup([spori1]);
var sporiFloor2Group = L.layerGroup([spori2]);
var sporiFloor3Group = L.layerGroup([spori3]);
 
// --- Visual Arts Studio Layers ---
var visualArts1 = L.tileLayer('https://mapwarper.net/maps/tile/108582/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var visualArtsFloor1Group = L.layerGroup([visualArts1]);
 
// --- Snow Layers ---
var snow1 = L.tileLayer('https://mapwarper.net/maps/tile/108583/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var snow2 = L.tileLayer('https://mapwarper.net/maps/tile/108585/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var snowFloor1Group = L.layerGroup([snow1]);
var snowFloor2Group = L.layerGroup([snow2]);
 
// --- Taylor Layers ---
var taylor1 = L.tileLayer('https://mapwarper.net/maps/tile/108611/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var taylor2 = L.tileLayer('https://mapwarper.net/maps/tile/108614/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var taylorFloor1Group = L.layerGroup([taylor1]);
var taylorFloor2Group = L.layerGroup([taylor2]);
 
// --- Kimball Layers ---
var kimball1 = L.tileLayer('https://mapwarper.net/maps/tile/108615/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var kimball2 = L.tileLayer('https://mapwarper.net/maps/tile/108616/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var kimballFloor1Group = L.layerGroup([kimball1]);
var kimballFloor2Group = L.layerGroup([kimball2]);
 
// --- Hinckley Layers ---
var hinckley1 = L.tileLayer('https://mapwarper.net/maps/tile/108617/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var hinckley2 = L.tileLayer('https://mapwarper.net/maps/tile/108620/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var hinckley3 = L.tileLayer('https://mapwarper.net/maps/tile/108621/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var hinckleyFloor1Group = L.layerGroup([hinckley1]);
var hinckleyFloor2Group = L.layerGroup([hinckley2]);
var hinckleyFloor3Group = L.layerGroup([hinckley3]);
 
// --- Ricks Layers ---
var ricks1 = L.tileLayer('https://mapwarper.net/maps/tile/108622/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var ricks2 = L.tileLayer('https://mapwarper.net/maps/tile/108623/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var ricksFloor1Group = L.layerGroup([ricks1]);
var ricksFloor2Group = L.layerGroup([ricks2]);
 
// --- Benson Layers ---
var benson1 = L.tileLayer('https://mapwarper.net/maps/tile/108638/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var benson2 = L.tileLayer('https://mapwarper.net/maps/tile/108639/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var bensonFloor1Group = L.layerGroup([benson1]);
var bensonFloor2Group = L.layerGroup([benson2]);
 
// --- I-Center Layers ---
var iCenter1 = L.tileLayer('https://mapwarper.net/maps/tile/108640/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var iCenter2 = L.tileLayer('https://mapwarper.net/maps/tile/108641/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var iCenter3 = L.tileLayer('https://mapwarper.net/maps/tile/108643/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
var iCenter4 = L.tileLayer('https://mapwarper.net/maps/tile/108644/{z}/{x}/{y}.png', { minZoom: 18, maxZoom: 21 });
 
var iCenterFloor1Group = L.layerGroup([iCenter1]);
var iCenterFloor2Group = L.layerGroup([iCenter2]);
var iCenterFloor3Group = L.layerGroup([iCenter3]);
var iCenterFloor4Group = L.layerGroup([iCenter4]);
 
// ==========================================
// 3. DEFINE BUILDING BOUNDS (GEOFENCES)
// ==========================================
var stcBounds = L.latLngBounds([43.813800, -111.785600], [43.815100, -111.783500]);
var austinBounds = L.latLngBounds([43.815378, -111.784987], [43.816241, -111.784096]);
var agEngBounds = L.latLngBounds([43.813090, -111.783420], [43.813390, -111.782881]);
var engTechBounds = L.latLngBounds([43.813833, -111.783432], [43.814284, -111.782765]);
var manwaveringBounds = L.latLngBounds([43.818153, -111.783384], [43.818784, -111.781726]);
var smithBounds = L.latLngBounds([43.818938, -111.781635], [43.819456, -111.781273]);
var mckayBounds = L.latLngBounds([43.819081, -111.783439], [43.819661, -111.782040]);
var hartBounds = L.latLngBounds([43.819222, -111.786368], [43.819742, -111.784104]);
var romneyBounds = L.latLngBounds([43.819953, -111.783522], [43.820474, -111.782852]);
var clarkeBounds = L.latLngBounds([43.819910, -111.781939], [43.820535, -111.781349]);
var sporiBounds = L.latLngBounds([43.820706, -111.782655], [43.820946, -111.782170]);
var visualArtsBounds = L.latLngBounds([43.820643, -111.781937], [43.821569, -111.781296]);
var snowBounds = L.latLngBounds([43.820738, -111.784284], [43.821646, -111.782903]);
var taylorBounds = L.latLngBounds([43.816683, -111.782995], [43.817300, -111.782005]);
var kimballBounds = L.latLngBounds([43.816677, -111.781764], [43.817521, -111.781222]);
var hinckleyBounds = L.latLngBounds([43.815555, -111.780155], [43.816205, -111.779584]);
var ricksBounds = L.latLngBounds([43.814671, -111.781907], [43.815147, -111.780711]);
var bensonBounds = L.latLngBounds([43.814831, -111.783422], [43.815773, -111.782671]);
var iCenterBounds = L.latLngBounds([43.817963, -111.786169], [43.819061, -111.784007]);
 
// ==========================================
// 4. SMART BUILDING DETECTION ON MAP CLICK
// ==========================================
function triggerBuildingView(location) {
    if (stcBounds.contains(location)) {
        setupBuildingMenu({ "Floor 3": stcFloor3Group, "Floor 2": stcFloor2Group, "Floor 1": stcFloor1Group }, stcFloor1Group);
        return true;
    }
    if (austinBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": austinFloor1Group, "Floor 2": austinFloor2Group }, austinFloor1Group);
        return true;
    }
    if (agEngBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": agEngFloor1Group, "Floor 2": agEngFloor2Group }, agEngFloor1Group);
        return true;
    }
    if (engTechBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": engTechFloor1Group, "Floor 2": engTechFloor2Group }, engTechFloor1Group);
        return true;
    }
    if (manwaveringBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": manwaveringFloor1Group, "Floor 2": manwaveringFloor2Group, "Floor 3": manwaveringFloor3Group }, manwaveringFloor1Group);
        return true;
    }
    if (smithBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": smithFloor1Group, "Floor 2": smithFloor2Group, "Floor 3": smithFloor3Group, "Floor 4": smithFloor4Group }, smithFloor1Group);
        return true;
    }
    if (mckayBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": mckayFloor1Group, "Floor 2": mckayFloor2Group, "Floor 3": mckayFloor3Group }, mckayFloor1Group);
        return true;
    }
    if (hartBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": hartFloor1Group, "Floor 2": hartFloor2Group, "Floor 3": hartFloor3Group }, hartFloor1Group);
        return true;
    }
    if (romneyBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": romneyFloor1Group, "Floor 2": romneyFloor2Group }, romneyFloor1Group);
        return true;
    }
    if (clarkeBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": clarkeFloor1Group, "Floor 2": clarkeFloor2Group, "Floor 3": clarkeFloor3Group }, clarkeFloor1Group);
        return true;
    }
    if (sporiBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": sporiFloor1Group, "Floor 2": sporiFloor2Group, "Floor 3": sporiFloor3Group }, sporiFloor1Group);
        return true;
    }
    if (visualArtsBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": visualArtsFloor1Group }, visualArtsFloor1Group);
        return true;
    }
    if (snowBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": snowFloor1Group, "Floor 2": snowFloor2Group }, snowFloor1Group);
        return true;
    }
    if (taylorBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": taylorFloor1Group, "Floor 2": taylorFloor2Group }, taylorFloor1Group);
        return true;
    }
    if (kimballBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": kimballFloor1Group, "Floor 2": kimballFloor2Group }, kimballFloor1Group);
        return true;
    }
    if (hinckleyBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": hinckleyFloor1Group, "Floor 2": hinckleyFloor2Group, "Floor 3": hinckleyFloor3Group }, hinckleyFloor1Group);
        return true;
    }
    if (ricksBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": ricksFloor1Group, "Floor 2": ricksFloor2Group }, ricksFloor1Group);
        return true;
    }
    if (bensonBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": bensonFloor1Group, "Floor 2": bensonFloor2Group }, bensonFloor1Group);
        return true;
    }
    if (iCenterBounds.contains(location)) {
        setupBuildingMenu({ "Floor 1": iCenterFloor1Group, "Floor 2": iCenterFloor2Group, "Floor 3": iCenterFloor3Group, "Floor 4": iCenterFloor4Group }, iCenterFloor1Group);
        return true;
    }
    return false;
}
 
function onMapClick(e) {
    triggerBuildingView(e.latlng);
}
map.on('click', onMapClick);
 
// ==========================================
// 5. CLEAN & REBUILD MENU HELPER FUNCTION
// ==========================================
function setupBuildingMenu(floorConfiguration, defaultFloor) {
    const layersToRemove = [
        stcFloor1Group, stcFloor2Group, stcFloor3Group, austinFloor1Group, austinFloor2Group,
        agEngFloor1Group, agEngFloor2Group, engTechFloor1Group, engTechFloor2Group,
        manwaveringFloor1Group, manwaveringFloor2Group, manwaveringFloor3Group,
        smithFloor1Group, smithFloor2Group, smithFloor3Group, smithFloor4Group,
        mckayFloor1Group, mckayFloor2Group, mckayFloor3Group, hartFloor1Group, hartFloor2Group, hartFloor3Group,
        romneyFloor1Group, romneyFloor2Group, clarkeFloor1Group, clarkeFloor2Group, clarkeFloor3Group,
        sporiFloor1Group, sporiFloor2Group, sporiFloor3Group, visualArtsFloor1Group,
        snowFloor1Group, snowFloor2Group, taylorFloor1Group, taylorFloor2Group,
        kimballFloor1Group, kimballFloor2Group, hinckleyFloor1Group, hinckleyFloor2Group, hinckleyFloor3Group,
        ricksFloor1Group, ricksFloor2Group, bensonFloor1Group, bensonFloor2Group,
        iCenterFloor1Group, iCenterFloor2Group, iCenterFloor3Group, iCenterFloor4Group
    ];
 
    layersToRemove.forEach(layer => {
        if (map.hasLayer(layer)) map.removeLayer(layer);
    });
 
    if (currentControl !== null) {
        map.removeControl(currentControl);
    }
 
    currentControl = L.control.layers(floorConfiguration, null, { collapsed: false });
    currentControl.addTo(map);
 
    if (map.getZoom() < 18) {
        map.setZoom(18);
    }
    defaultFloor.addTo(map);
}
 
// ==========================================
// 6. GLOBAL ZOOM CLEANUP LISTENER & UTILITIES
// ==========================================
 
// Helper mapping dictionary connecting a building ID to its array floor layers
const buildingFloorMap = {
    "STC": { 1: stcFloor1Group, 2: stcFloor2Group, 3: stcFloor3Group },
    "Austin": { 1: austinFloor1Group, 2: austinFloor2Group },
    "Agricultural Engineering": { 1: agEngFloor1Group, 2: agEngFloor2Group },
    "ETC": { 1: engTechFloor1Group, 2: engTechFloor2Group },
    "MC": { 1: manwaveringFloor1Group, 2: manwaveringFloor2Group, 3: manwaveringFloor3Group },
    "Smith": { 1: smithFloor1Group, 2: smithFloor2Group, 3: smithFloor3Group, 4: smithFloor4Group },
    "McKay Library": { 1: mckayFloor1Group, 2: mckayFloor2Group, 3: mckayFloor3Group },
    "Hart": { 1: hartFloor1Group, 2: hartFloor2Group, 3: hartFloor3Group },
    "Romney": { 1: romneyFloor1Group, 2: romneyFloor2Group },
    "Clarke": { 1: clarkeFloor1Group, 2: clarkeFloor2Group, 3: clarkeFloor3Group },
    "Spori": { 1: sporiFloor1Group, 2: sporiFloor2Group, 3: sporiFloor3Group },
    "Visual Arts Studio": { 1: visualArtsFloor1Group },
    "Snow": { 1: snowFloor1Group, 2: snowFloor2Group },
    "Taylor": { 1: taylorFloor1Group, 2: taylorFloor2Group },
    "Kimball": { 1: kimballFloor1Group, 2: kimballFloor2Group },
    "Hinckley": { 1: hinckleyFloor1Group, 2: hinckleyFloor2Group, 3: hinckleyFloor3Group },
    "Ricks": { 1: ricksFloor1Group, 2: ricksFloor2Group },
    "Benson": { 1: bensonFloor1Group, 2: bensonFloor2Group },
    "I-Center": { 1: iCenterFloor1Group, 2: iCenterFloor2Group, 3: iCenterFloor3Group, 4: iCenterFloor4Group }
};
 
const markerStyles = {
    microwave: 'background-color: #E67E22; border: 2px solid #D35400;', // Orange
    printer:   'background-color: #2ECC71; border: 2px solid #27AE60;', // Green
    vending:   'background-color: #3498DB; border: 2px solid #2980B9;'  // Blue
};
 
function createCustomIcon(styleInline) {
    return L.divIcon({
        className: 'custom-pin',
        html: `<div style="${styleInline} width: 14px; height: 14px; border-radius: 50%; box-shadow: 0 0 4px rgba(0,0,0,0.4);"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
    });
}
 
map.on('zoomend', function() {
    var currentZoom = map.getZoom();
    console.log("Current Zoom Level: " + currentZoom);
     
    if (currentZoom < 18) { 
        if (building_markers) {
            building_markers.forEach(marker => {
                if (!map.hasLayer(marker)) {
                    marker.addTo(map);
                }
            });
        }
 
        if (currentControl !== null) {
            map.removeControl(currentControl);
            currentControl = null;
        }

        if (currentZoom <= 14) {
            displayZoomMessage(true);
        } else {
            displayZoomMessage(false);
        }
    } else {
        displayZoomMessage(false);
    }
});

// POPULATE ALL PINS DIRECTLY TO LAYER GROUPS ONCE
// POPULATE ALL PINS DIRECTLY TO LAYER GROUPS ONCE
function populateFloorPins() {
    console.log("--- START PINS DIAGNOSTIC ---");
    let matchedMicrowaves = 0;

    microwaves.forEach((m, idx) => {
        const targetBuilding = buildings.find(b => b.building_id == m.building_id);
        // Fallback to building_id string if building_name isn't matching the dictionary key
        const buildingKey = targetBuilding ? targetBuilding.building_name : m.building_id;
        
        const associatedRoom = rooms.find(r => r.room_id == m.room_id);
        const floorNum = associatedRoom ? Number(associatedRoom.floor) : 1;
        
        const targetingGroup = buildingFloorMap[buildingKey]?.[floorNum];
        
        if (targetBuilding && targetingGroup) {
            matchedMicrowaves++;
            const microwaveMarker = L.marker([m.latitude, m.longitude], { icon: createCustomIcon(markerStyles.microwave) })
             .bindPopup(`<b>Microwave</b><br>${m.location_description}<br>Room: ${associatedRoom ? associatedRoom.room_number : 'Unknown'}`);

            microwaveMarker.on('click', () => updateReviewTarget(m));
            microwaveMarker.on('popupopen', () => updateReviewTarget(m));
            microwaveMarker.addTo(targetingGroup);
        } else if (idx < 3) {
            console.warn(`Microwave index ${idx} failed match. Key used: "${buildingKey}", Layer Found: ${!!targetingGroup}`);
        }
    });

    console.log(`Successfully mapped ${matchedMicrowaves} out of ${microwaves.length} microwaves.`);
    console.log("--- END PINS DIAGNOSTIC ---");

    // --- Apply the exact same logic below to printers ---
    printers.forEach(p => {
        const targetBuilding = buildings.find(b => b.building_id == p.building_id);
        const buildingKey = targetBuilding ? targetBuilding.building_name : p.building_id;
        const associatedRoom = rooms.find(r => r.room_id == p.room_id);
        const floorNum = associatedRoom ? Number(associatedRoom.floor) : 1;
        
        const targetingGroup = buildingFloorMap[buildingKey]?.[floorNum];
        if (targetingGroup) {
            L.marker([p.latitude, p.longitude], { icon: createCustomIcon(markerStyles.printer) })
             .bindPopup(`<b>Printer Pin</b><br>${p.location_description}`)
             .addTo(targetingGroup);
        }
    });
    // --- Apply the exact same logic below to vending machines ---
    vending_machines.forEach(v => {
        const targetBuilding = buildings.find(b => b.building_id == v.building_id);
        const buildingKey = targetBuilding ? targetBuilding.building_name : v.building_id;
        const associatedRoom = rooms.find(r => r.room_id == v.room_id);
        const floorNum = associatedRoom ? Number(associatedRoom.floor) : 1;
        
        const targetingGroup = buildingFloorMap[buildingKey]?.[floorNum];
        if (targetingGroup) {
            L.marker([v.latitude, v.longitude], { icon: createCustomIcon(markerStyles.vending) })
             .bindPopup(`<b>Vending Machine (${v.vendor || 'Snacks/Drinks'})</b><br>${v.location_description}`)
             .addTo(targetingGroup);
        }
    });
}
 
function displayZoomedOut(load_it) {
    if (!load_it) return;
    if (building_markers && building_markers.length > 0) return;
     
    building_markers = [];
 
    // 1. PLOT MASTER BUILDINGS ON OVERVIEW
    buildings.forEach((building) => {
        const latlng = [building.latitude, building.longitude];
 
        // FIXED: Count using matching database strings/IDs instead of array iteration position index
        const microCount = microwaves.filter(m => m.building_id == building.building_id).length;
        const printCount = printers.filter(p => p.building_id == building.building_id).length;
        const vendCount  = vending_machines.filter(v => v.building_id == building.building_id).length;
 
        const tooltipContent = `
            <div style="font-family: Arial, sans-serif; padding: 4px;">
                <h4 style="margin: 0 0 6px 0;">${building.building_name}</h4>
                <hr style="margin: 4px 0; border: 0; border-top: 1px solid #BDC3C7;"/>
                <ul style="margin: 0; padding-left: 14px; font-size: 12px;">
                    <li><b>Microwaves:</b> ${microCount}</li>
                    <li><b>Printers:</b> ${printCount}</li>
                    <li><b>Vending Machines:</b> ${vendCount}</li>
                </ul>
            </div>
        `;
        
        const icon_html = '<p class="building-icon-html">' + building.building_name + '</p>';
        var building_icon = L.divIcon({className: 'leaflet-building-icon', html: icon_html});
        const marker = L.marker(latlng, {icon: building_icon}).addTo(map);
        marker.building_id = building.building_id;
 
        marker.bindTooltip(tooltipContent, {
            permanent: false,
            direction: 'top',
            className: 'building-summary-tooltip'
        });
 
        marker.on('click', function() {
            marker.openTooltip();
 
            setTimeout(() => {
                building_markers.forEach(m => {
                    if (!map.hasLayer(m)) m.addTo(map);
                });
 
                map.removeLayer(marker);
                map.setView(latlng, 18); 
                
                triggerBuildingView(latlng);
            }, 300);
        });
 
        building_markers.push(marker);
    });
}
 
window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Executing Leaflet maps initialization...");
    populateFloorPins();
    displayZoomedOut(true);
});

//Zooms in to user position #MAY USE FOR A BUTTON
// map.locate({setView: true, maxZoom: 16});

/** Function: Displays "Please zoom in" if zoomed out way too far */
function displayZoomMessage(load_it) {
    if (load_it) {
        if (!document.getElementById('zoom_element')) {
            const zoom_element = document.createElement("div");
            zoom_element.className = "zoom-container";
            zoom_element.id = 'zoom_element';
            
            zoom_element.innerHTML = "<p class='zoom-icon-html'>Please zoom in</p>"
            
            const mapDOM = document.getElementById('map');
            mapDOM.append(zoom_element);
        }
    } else {
        try {
            if (document.getElementById('zoom_element'))
                document.getElementById('zoom_element').remove();
        } catch (error) {
            console.log(error)
        }
    }
}

