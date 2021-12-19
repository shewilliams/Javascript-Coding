let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
    subdomains: "abcd",
    maxZoom: 18
  });

//Map to show what part to show
tileLayer.addTo(firstMap);
firstMap.setView([40.7058, -73.9967], 15);


let brooklynBridge, brooklynBridgeMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
brooklynBridge = L.latLng(40.7058, -73.9967);
brooklynBridgeMarker = L.marker(brooklynBridge).addTo(firstMap);
tenThousandth = [[40.7079, -73.9994], [40.7033, -73.9938], [40.7033, -73.9930], [40.7082, -73.9991]];
tenThousandthPolygon = L.polygon(tenThousandth, {
  color: "#0c1445",
  fillColor: "#0c1445"
}).addTo(firstMap);

thousandth = [[brooklynBridge.lat + 0.0001, brooklynBridge.lng + 0.0001],
              [brooklynBridge.lat + 0.0001, brooklynBridge.lng - 0.0001],
              [brooklynBridge.lat - 0.0001, brooklynBridge.lng - 0.0001],
              [brooklynBridge.lat - 0.0001, brooklynBridge.lng + 0.0001]];
thousandthPolyline = L.polyline(thousandth, {
    color: "#d33682"
}).addTo(firstMap);
                      
let circle;
circle = L.circle(brooklynBridge, {
    radius: 500,
    color: "#d7798b",
    fillColor: "#d7798b",
    opacity: 0.9,
    fillOpacity: 0.25
}).addTo(firstMap);

brooklynBridgeMarker.bindPopup("Took a walk on the Brooklyn Bridge in the wee morning hours.");