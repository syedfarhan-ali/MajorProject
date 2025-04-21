maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
    container: "map", // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS, // style URL
    center: [77.1025, 28.7041], // starting position [lng, lat]
    zoom: 10.68, // starting zoom
});
