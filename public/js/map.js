maptilersdk.config.apiKey = mapToken;

if (
  listing &&
  listing.geometry &&
  Array.isArray(listing.geometry.coordinates) &&
  listing.geometry.coordinates.length === 2
) {
  const map = new maptilersdk.Map({
      container: "map", // container's id or the HTML element to render the map
      style: maptilersdk.MapStyle.STREETS, // style URL
      center: listing.geometry.coordinates, // starting position [lng, lat]
      zoom: 11, // starting zoom
  });

new maptilersdk.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup().setHTML(`
      <div>
        <h5>${listing.title}</h5>
        <p><i>Exact location shown after booking</i></p>
      </div>
    `)
  )
  .addTo(map);
}

else {
  const map = new maptilersdk.Map({
      container: "map", // container's id or the HTML element to render the map
      style: maptilersdk.MapStyle.STREETS, // style URL
      center: [71,26], // starting position [lng, lat]
      zoom: 11, // starting zoom
  });

new maptilersdk.Marker({ color: "red" })
  .setLngLat([71,26])
  .setPopup(
    new maptilersdk.Popup().setHTML(`
      <div>
        <h5>${listing.title}</h5>
        <p><i>Exact location shown after booking</i></p>
      </div>
    `)
  )
  .addTo(map);
}