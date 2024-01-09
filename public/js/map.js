mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v12',
    center : listing.geometry.coordinates,
    zoom : 10,
});

const marker1 = new mapboxgl.Marker({color : "red"})
    .setLngLat(listing.geometry.coordinates)//listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h5>${listing.location}</h5><p>Exact Location Provide after Booking</p>`))
    .addTo(map);
