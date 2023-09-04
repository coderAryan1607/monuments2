let latitude=46.20541658529256,  longitude=6.14097820886656;
 // Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'


var map = new mapboxgl.Map ({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude, latitude],
    zoom:16

})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy:true},
        trackUserLocation:true
    })
)
map.addControl(
    new MapboxDirections({
       accessToken: mapboxgl.accessToken,
    }),
    "top-left"
)

var img1 = document.querySelector("#wf")

var marker1 = new mapboxgl.Marker({element:img1})
.setLngLat([46.207693533299164, 6.155873851764741])
.addTo(map)