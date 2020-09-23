// Inspired from https://www.getbounds.com/blog/leaflet-store-locator/, but copied/adapted from on https://github.com/ttntm/hugo-leaflet-store-locator

const items = $('.sItem'); // all shops in the list
const item = $('.sItem--offline'); // each shop
const startZoom = 2; //Define zoom level - 13 = default | 19 = max
const startLat = 29.5133;
const startLon = 10.1629;


// create Map
var mymap = L.map('brainhackmap', { scrollWheelZoom: false } ).setView([startLat, startLon], startZoom);

// Add tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors | <a href="javascript:resetMap();">Reset map</a>'
}).addTo(mymap);

// zoom options enable/disable
mymap.on('click', () => { mymap.scrollWheelZoom.enable(); });
mymap.on('mouseout', () => { mymap.scrollWheelZoom.disable(); });

// add GPS find me button
L.control.locate().addTo(mymap);

// create marker cluster layer
var markers = L.markerClusterGroup();

// iterate stores, add markers to map
for (let i = 0; i < items.length; i++) {
    let iLat = items[i].getAttribute('data-lat');
    let iLon = items[i].getAttribute('data-lon');

    // if (!isEmpty(iLat) | !isEmpty(iLon)) {
        // get popup info
        let name = items[i].getAttribute('data-name');
        let ad = items[i].getAttribute('data-add');
        let plz = items[i].getAttribute('data-plz');
        // create marker with associated popup
    markers.addLayer(L.marker([iLat, iLon], { key: iLat + '__' + iLon }).bindPopup("<b>" + name + "</b>" + "<br>" + ad + ", " + "<br>" + "Organizers: " + plz)); // marker added to cluster layer
        // we use an ID made up of iLat and iLon here, so we can find the marker again later
    // }
}

// add clustered markers to map
mymap.addLayer(markers);

function findStore() {
    const searchInput = $('#storefinder');
    const hidden = 'sItem--hidden';
    const result = $('#result');

    let filter = searchInput.val().toUpperCase();
    let count = 0; // reset on each function call

    for (let i = 0; i < items.length; i++) {
        let plz = items[i].getAttribute('data-plz').toUpperCase();
        let cty = items[i].getAttribute('data-cty').toUpperCase();
        let shopName = items[i].getAttribute('data-name').toUpperCase();
        if (plz.toUpperCase().indexOf(filter) > -1) { // check PLZ
            items[i].classList.remove(hidden);
            count = count + 1;
        } else if (cty.toUpperCase().indexOf(filter) > -1) { // PLZ not found, check country
            items[i].classList.remove(hidden);
            count = count + 1;
        } else if (shopName.toUpperCase().indexOf(filter) > -1) {
            items[i].classList.remove(hidden);
            count = count + 1;
        } else { // nothing found
            items[i].classList.add(hidden);
        }
    }
    result.html(count + ' events - <a href="javascript:clearSearch();">Reset</a>'); // print the search result
}

// handle item clicks
item.click(function () {
    let ct = $(this);
    let pt = ct.parent(); // the data-* attributes are with the parent <div>
    let pLat = pt.attr('data-lat');
    let pLon = pt.attr('data-lon');
    let id = pLat + '__' + pLon;

    // if (!isEmpty(pLat) | !isEmpty(pLon)) {
        // find the correct marker
        markers.eachLayer(function (layer) {
            if (layer.options.key === id) {
                mymap.setView([pLat, pLon], 19); // move to the selected item and zoom in
                layer.openPopup()
            }
        });
    // }
});

// reset map
function resetMap() {
    mymap.closePopup();
    mymap.setView([startLat, startLon], startZoom);
}

// clear search
function clearSearch() {
    document.getElementById('storefinder').value = '';
    findStore();
    resetMap();
}


