

var map = L.map('map').setView([28.2521, 83.9774], 18);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var streetV2;

fetch('data/streetV2.json')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        // Use the JSON data
        streetV2 = data;
        var s_light_style = {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };

        L.geoJSON(streetV2, {
            onEachFeature: function (feature, layer) {
                var popupContent = '<h4 class = "text-primary">streetV2 Light</h4>' +
                    '<div class="container"><table class="table table-striped">' +
                    '<thead><tr><th>Properties</th><th>Value</th></tr></thead>' +
                    '<tbody><tr><td> Name </td><td>' + feature.properties.Name + '</td></tr>' +
                    '<tr><td>Elevation </td><td>' + feature.properties.ele + '</td></tr>' +
                    '<tr><td> Power (watt) </td><td>' + feature.properties.Power_Watt + '</td></tr>' +
                    '<tr><td> Pole Height </td><td>' + feature.properties.pole_hgt + '</td></tr>' +
                    '<tr><td> Time </td><td>' + feature.properties.time + '</td></tr>';
                layer.bindPopup(popupContent)
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, s_light_style);
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading JSON:', error));