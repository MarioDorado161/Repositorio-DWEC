var map;
var service;
var infowindows;
const formBusqueda = document.getElementById("form-busqueda");
let infowindow;

function initMap() {
    var toledo = new google.maps.LatLng(39.87109, -4.02268);

    map = new google.maps.Map(
        document.getElementById("map"),
        { center: toledo, zoom: 15 }
    );

    infowindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker({
        position: toledo,
        map: map,
    });
}

function centerMap(lat, long) {
    const positionGeo = new google.maps.LatLng(lat, long);
    map.setCenter(positionGeo);
}

const buscarHandler = (e) => {
    console.log(e.target);
    const busqueda = document.getElementById('busqueda').value;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=
    ${encodeURI(busqueda)}&region=ES&key=YOUR_API_KEY`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error consulta a la API: ' + error);
        });
};

formBusqueda.addEventListener('submit', e => {
    e.preventDefault();
    buscarHandler(e);
})
