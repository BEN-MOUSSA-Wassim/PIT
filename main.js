// import streetV2 from '/data/streetV2.json' assert { type: 'json' };


var map = L.map('map').setView([28.2521, 83.9774], 18);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// to get the height of the window
var height = $(window).height();
console.log(`the height of the pc is: ` + height);

var streetV2;

fetch('data/streetV2.json')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        // Use the JSON data
        streetV2 = data;


        console.log(typeof streetV2);

        // fetch('data/streetV2.json')
        //   .then(response => response.json()) // Parse JSON
        //   .then(data => {
        //     console.log(data); // Store it in a variable
        //     const jsonData = data; 
        //   })
        //   .catch(error => console.error('Error loading JSON:', error));

        //  {
        // "type": "FeatureCollection",
        // "name": "streetV2",
        // "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        // "features": [
        // { "type": "Feature", "properties": { "ele": 969.947449, "time": "2019-05-13T00:00:00Z", "Name": "SL1", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978335717588834, 28.252707666241346 ] } },
        // { "type": "Feature", "properties": { "ele": 969.808594, "time": "2019-05-13T00:00:00Z", "Name": "SL2", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978277691915082, 28.252452157174343 ] } },
        // { "type": "Feature", "properties": { "ele": 968.762085, "time": "2019-05-13T00:00:00Z", "Name": "SL3", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978162974944894, 28.252283018791324 ] } },
        // { "type": "Feature", "properties": { "ele": 968.237427, "time": "2019-05-13T00:00:00Z", "Name": "SL4", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978048408885272, 28.252123729497736 ] } },
        // { "type": "Feature", "properties": { "ele": 967.487244, "time": "2019-05-13T00:00:00Z", "Name": "SL5", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977956119591681, 28.251950584850945 ] } },
        // { "type": "Feature", "properties": { "ele": 965.998779, "time": "2019-05-13T00:00:00Z", "Name": "SL6", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977855987472438, 28.251799578587171 ] } },
        // { "type": "Feature", "properties": { "ele": 965.863647, "time": "2019-05-13T00:00:00Z", "Name": "SL7", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977649883540195, 28.251898082009038 ] } },
        // { "type": "Feature", "properties": { "ele": 966.90918, "time": "2019-05-13T00:00:00Z", "Name": "SL8", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977499025055096, 28.251714408305322 ] } },
        // { "type": "Feature", "properties": { "ele": 966.21582, "time": "2019-05-13T00:00:00Z", "Name": "SL9", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977301597378514, 28.251744861037025 ] } },
        // { "type": "Feature", "properties": { "ele": 966.358154, "time": "2019-05-13T00:00:00Z", "Name": "SL10", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977065468391146, 28.251788861037024 ] } },
        // { "type": "Feature", "properties": { "ele": 967.428528, "time": "2019-05-13T00:00:00Z", "Name": "SL11", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976863455863594, 28.251823137803061 ] } },
        // { "type": "Feature", "properties": { "ele": 967.375732, "time": "2019-05-13T00:00:00Z", "Name": "SL12", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976642046978313, 28.251875294977403 ] } },
        // { "type": "Feature", "properties": { "ele": 967.645447, "time": "2019-05-13T00:00:00Z", "Name": "SL13", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976414465259268, 28.252118353168619 ] } },
        // { "type": "Feature", "properties": { "ele": 967.933899, "time": "2019-05-13T00:00:00Z", "Name": "SL14", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976180616169827, 28.252032093956633 ] } },
        // { "type": "Feature", "properties": { "ele": 967.143311, "time": "2019-05-13T00:00:00Z", "Name": "SL15", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976504849089423, 28.252266433940381 ] } },
        // { "type": "Feature", "properties": { "ele": 967.229309, "time": "2019-05-13T00:00:00Z", "Name": "SL16", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976614, 28.252443 ] } },
        // { "type": "Feature", "properties": { "ele": 967.09375, "time": "2019-05-13T00:00:00Z", "Name": "SL17", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976764, 28.252648 ] } },
        // { "type": "Feature", "properties": { "ele": 966.319031, "time": "2019-05-13T00:00:00Z", "Name": "SL18", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976869723233975, 28.252821138383016 ] } },
        // { "type": "Feature", "properties": { "ele": 967.748596, "time": "2019-05-13T00:00:00Z", "Name": "SL19", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976976867880751, 28.252968421412824 ] } },
        // { "type": "Feature", "properties": { "ele": 967.057373, "time": "2019-05-13T00:00:00Z", "Name": "SL20", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976998, 28.252705 ] } },
        // { "type": "Feature", "properties": { "ele": 966.999512, "time": "2019-05-13T00:00:00Z", "Name": "SL21", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977037, 28.252896 ] } },
        // { "type": "Feature", "properties": { "ele": 966.080566, "time": "2019-05-13T00:00:00Z", "Name": "SL22", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977086421412821, 28.253035163438117 ] } },
        // { "type": "Feature", "properties": { "ele": 967.31073, "time": "2019-05-13T00:00:00Z", "Name": "SL23", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977268572323396, 28.253022723233961 ] } },
        // { "type": "Feature", "properties": { "ele": 966.532227, "time": "2019-05-13T00:00:00Z", "Name": "SL24", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977473, 28.252992 ] } },
        // { "type": "Feature", "properties": { "ele": 966.030273, "time": "2019-05-13T00:00:00Z", "Name": "SL25", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977373, 28.252857 ] } },
        // { "type": "Feature", "properties": { "ele": 964.90564, "time": "2019-05-13T00:00:00Z", "Name": "SL26", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977307, 28.252659 ] } },
        // { "type": "Feature", "properties": { "ele": 964.266174, "time": "2019-05-13T00:00:00Z", "Name": "SL27", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977268, 28.252467 ] } },
        // { "type": "Feature", "properties": { "ele": 965.117859, "time": "2019-05-13T00:00:00Z", "Name": "SL28", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977669, 28.252974 ] } },
        // { "type": "Feature", "properties": { "ele": 963.222961, "time": "2019-05-13T00:00:00Z", "Name": "SL29", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.97774, 28.25277 ] } },
        // { "type": "Feature", "properties": { "ele": 963.525024, "time": "2019-05-13T00:00:00Z", "Name": "SL30", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.97768, 28.252566 ] } },
        // { "type": "Feature", "properties": { "ele": 963.308533, "time": "2019-05-13T00:00:00Z", "Name": "SL31", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977636, 28.252372 ] } },
        // { "type": "Feature", "properties": { "ele": 963.810547, "time": "2019-05-13T00:00:00Z", "Name": "SL32", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977907, 28.252911 ] } },
        // { "type": "Feature", "properties": { "ele": 963.318237, "time": "2019-05-13T00:00:00Z", "Name": "SL33", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.97814, 28.252845 ] } },
        // { "type": "Feature", "properties": { "ele": 963.288208, "time": "2019-05-13T00:00:00Z", "Name": "SL34", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.97838, 28.252821 ] } },
        // { "type": "Feature", "properties": { "ele": 962.503479, "time": "2019-05-13T00:00:00Z", "Name": "SL35", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978203, 28.252628 ] } },
        // { "type": "Feature", "properties": { "ele": 962.00061, "time": "2019-05-13T00:00:00Z", "Name": "SL36", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978061, 28.252492 ] } },
        // { "type": "Feature", "properties": { "ele": 961.222595, "time": "2019-05-13T00:00:00Z", "Name": "SL37", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.97801529555737, 28.252305 ] } },
        // { "type": "Feature", "properties": { "ele": 960.887939, "time": "2019-05-13T00:00:00Z", "Name": "SL38", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977867, 28.252244 ] } },
        // { "type": "Feature", "properties": { "ele": 960.556824, "time": "2019-05-13T00:00:00Z", "Name": "SL39", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977615, 28.252244 ] } },
        // { "type": "Feature", "properties": { "ele": 960.330872, "time": "2019-05-13T00:00:00Z", "Name": "SL40", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977398102694977, 28.252231410779888 ] } },
        // { "type": "Feature", "properties": { "ele": 960.645813, "time": "2019-05-13T00:00:00Z", "Name": "SL41", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.977211974326266, 28.252277359432398 ] } },
        // { "type": "Feature", "properties": { "ele": 960.525696, "time": "2019-05-13T00:00:00Z", "Name": "SL42", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976973051347485, 28.252330256737427 ] } },
        // { "type": "Feature", "properties": { "ele": 959.930664, "time": "2019-05-13T00:00:00Z", "Name": "SL43", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978516, 28.252946 ] } },
        // { "type": "Feature", "properties": { "ele": 960.522827, "time": "2019-05-13T00:00:00Z", "Name": "SL44", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978552, 28.253074 ] } },
        // { "type": "Feature", "properties": { "ele": 960.059509, "time": "2019-05-13T00:00:00Z", "Name": "SL45", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978548, 28.253125 ] } },
        // { "type": "Feature", "properties": { "ele": 959.729492, "time": "2019-05-13T00:00:00Z", "Name": "SL46", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.978076, 28.253048 ] } },
        // { "type": "Feature", "properties": { "ele": 960.432324, "time": "2019-05-13T00:00:00Z", "Name": "SL47", "Power_Watt": 30, "pole_hgt": 8 }, "geometry": { "type": "Point", "coordinates": [ 83.976759412911932, 28.252381636428613 ] } }
        // ]
        // };    

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