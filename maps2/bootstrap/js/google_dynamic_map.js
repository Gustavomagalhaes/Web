//// Map Initialize function
//function initialize() 
//{		
//	// Set static latitude, longitude value
//	var latlng = new google.maps.LatLng(-8.052789299999999, -34.94927110000003);
//	
//	// Get current location
////	navigator.geolocation.getCurrentPosition(function(position) {
////      latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);;
//	
//	// Set map options
//	var myOptions = {
//		zoom: 16,
//		center: latlng,
//		panControl: true,
//		zoomControl: true,
//		scaleControl: true,
//		mapTypeId: google.maps.MapTypeId.ROADMAP
//	}
//	
//	// Create map object with options
//	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//	
//	// Create and set the marker
//	marker = new google.maps.Marker({
//		map: map,
//		draggable:true,	
//		position: latlng
//	});
//	
//	// Register Custom "dragend" Event
//	google.maps.event.addListener(marker, 'dragend', function() {
//		
//		// Get the Current position, where the pointer was dropped
//		var point = marker.getPosition();
//		
//		// Center the map at given point
//		map.panTo(point);
//		
//		// Update the textbox
//		document.getElementById('MyCoordinates').value=point.lat()+", "+point.lng();
//		console.log(point.lat()+", "+point.lng());
//	});
//}

function initialize() {

  var markers = [];
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

