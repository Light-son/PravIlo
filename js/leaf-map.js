;
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('mapid').setView([48.5125571,34.5946928], 20);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: '../img/Google-icon.png',
    iconRetinaUrl: '../img/Google-icon.png',
    iconSize: [44, 44],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowRetinaUrl: 'my-icon-shadow@2x.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

L.marker([48.5125571,34.5946928], {icon: myIcon}).addTo(map);