var map, pointarray, heatmap, lat, long;

var taxiData = [
  new google.maps.LatLng(-8.152789299999999, -34.94927110000003),
  new google.maps.LatLng(-8.152589299999999, -34.95927110000003),
  new google.maps.LatLng(-8.152389299999999, -34.96927110000003),
  new google.maps.LatLng(-8.152489299999999, -34.97927110000003),
  new google.maps.LatLng(-8.052789299999999, -34.94927110000003),
  new google.maps.LatLng(-8.052589299999999, -34.95927110000003),
  new google.maps.LatLng(-8.052389299999999, -34.96927110000003),
  new google.maps.LatLng(-8.052489299999999, -34.97927110000003),
];

// var taxiData = new Array();

google.maps.event.addDomListener(window, 'load', initialize2);

function initialize2() {
  
  //   blockspring.runParsed("query-google-spreadsheet", 
  //   { "query": "SELECT B, C", "url": "https://docs.google.com/spreadsheets/d/1ZozQgFh8mXoA4QYg4hrhuEREy9cowNu_LNlzDuAZOG4/edit#gid=1016957434"}, 
  //   { "api_key": "" }, function(res){
      
  //     debugger;
  //   var data = res.params["data"];
      
  //   console.log(Object.keys(data)); 
    
  //   Object.keys(data).forEach(function (key) {
      
  //     console.log(parseFloat(data[key].Latitude));
  //     console.log(parseFloat(data[key].Longetude));
  //     console.log(key);
      
  //     taxiData[key] = new google.maps.LatLng(data[key].Latitude, data[key].Longetude);
      
  //   });
  //   console.log("Teste1");
  //   console.log(taxiData);
  // });
  
  // console.log("novo LOL")
  // console.log(taxiData);
  
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(-8.052789299999999, -34.94927110000003),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  console.log("Teste3");
  console.log(taxiData);
  
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
