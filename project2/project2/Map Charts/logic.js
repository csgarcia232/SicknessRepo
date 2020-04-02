// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its deaths
function markerSize(deaths) {
  return deaths / 5;
}

// Each city object contains the city's name, location and deaths
var states = [
  {
    name: "Michigan",
    location: [44.3148, -85.6024],
    deaths: 500
  },
  {
    name: "Texas",
    location: [31.9686, -99.9018],
    deaths: 460
  },
  {
    name: "Missouri",
    location: [37.9643, -91.8318],
    deaths: 368
  },
  {
    name: "Georgia",
    location: [32.1656, -82.9001],
    deaths: 351
  },
  {
    name: "Pennsylvania",
    location: [41.2033, -77.1945],
    deaths: 345
  }
];

// Loop through the states array and create one marker for each city object
for (var i = 0; i < states.length; i++) {
  L.circle(states[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its deaths
    radius: markerSize(states[i].deaths)
  }).bindPopup("<h1>" + states[i].name + "</h1> <hr> <h3>deaths: " + states[i].deaths + "</h3>").addTo(myMap);
}
