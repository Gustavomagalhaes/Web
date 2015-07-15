var map, pointarray, heatmap, lat, long;

// var taxiData = [
//   new google.maps.LatLng(37.782551, -122.445368),
//   new google.maps.LatLng(37.782745, -122.444586),
//   new google.maps.LatLng(37.782842, -122.443688),
// ];

var taxiData = [];

function readSpreadSheet() {  
  blockspring.runParsed("query-google-spreadsheet", 
    { "query": "SELECT A, B", "url": "https://docs.google.com/spreadsheets/d/1ZozQgFh8mXoA4QYg4hrhuEREy9cowNu_LNlzDuAZOG4/edit#gid=0"}, 
    { "api_key": "" }, function(res){
      
    var data = res.params["data"];
      
    console.log(Object.keys(data)); 
    
    Object.keys(data).forEach(function (key) {
      
      console.log(data[key].Latitude);
      console.log(data[key].Longetude);
      console.log(key);
      
      taxiData[key] = new google.maps.LatLng(data[key].Latitude, data[key].Longetude);
    });
    console.log(taxiData);
  })
}

function initialize() {
  
  readSpreadSheet();
  
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(-8.052789299999999, -34.94927110000003),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var pointArray = new google.maps.MVCArray(taxiData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// google.maps.event.addDomListener(window, 'load', readSpreadSheet);
google.maps.event.addDomListener(window, 'load', initialize);