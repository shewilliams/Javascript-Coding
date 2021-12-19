let map, tileLayer;
map = L.map("meteorite-map");

tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([43.4113, -106.28], 16);

let meteroriteFeatures;
$.getJSON("../meteorite.geo.json", function(data){
  // Define the Leaflet layer.
  let meteroriteLayer;
  meteroriteFeatures = data.features.map(function(feature){
    return {
      name: feature.properties.name,
      id: feature.properties.id,
      nametype: feature.properties.nametype,
      weight: feature.properties.mass,
      fall: feature.properties.fall,
      year: feature.properties.year,
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]),
      //tab: feature.properties.tab
    };
  });

  meteroriteLayer = L.featureGroup(meteroriteFeatures.map(function(feature){
    let popupContent;
    popupContent = "<strong>Meteorite name:</strong> " + feature.name + "<br> ";
    popupContent = popupContent + "<strong>Year Founded: </strong>" + feature.year + "<br> ";
    popupContent = popupContent + "<strong>Weight: </strong>" + feature.weight + " g <br> ";

    return L.circleMarker(feature.latLng, {
      radius: 0.00125 * Math.sqrt(feature.weight),
      color: "#002269",
      fillColor: "#2b2f77"
    }).bindPopup(popupContent);
    })
  )
  meteroriteLayer.addTo(map);
  map.fitBounds(meteroriteLayer.getBounds());
  map.zoomOut(-1);
});

let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
// Load the Markdown file for the main content next to the map, with jQuery.
$.ajax({
  url: "../introduction.md",
  success: function(markdown){
    // Convert the Markdown to HTML.
    let html1;
    html1 = md.render(markdown);
    // Print the HTML to #content using jQuery.
    $("#content").html(html1);
  }
});

let placesArray;
placesArray = ["introduction", "willamette", "mbosi", "sikhote-alin", "mundrabilla", "hoba"]
placesArray.forEach(function(tab){
$.ajax({ 
  url: tab + ".md",
  success: function(markdown){
    let html;
    html = md.render(markdown);
    $("#" + tab).html(html);

    $("#tabs-nav a[href='#" + tab + "']").click(function(){
      if ( tab === 'willamette'){
        map.flyTo([45.3666, -122.5833], 5);
      }
      else if (tab === 'mbosi') {
        map.flyTo([-9.1166, 33.0666], 5);
      }
      else if (tab === 'sikhote-alin') {
        map.flyTo([46.16, 134.6533], 5);
      }
      else if (tab === 'mudrabilla') {
        map.flyTo([-30.7833, 127.55], 5);
      }
      else if (tab === 'hoba') {
        map.flyTo([-19.5833, 17.9166], 5);
      }
      else {
        map.flyTo([43.4113, -106.28], 2);
      }

    });
  }
});
});