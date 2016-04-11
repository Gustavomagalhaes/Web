function initialize() {

  var latlng = new google.maps.LatLng(-8.052789299999999, -34.94927110000003);

  var myOptions = {
		zoom: 16,
		center: latlng,
		panControl: true,
		zoomControl: true,
		scaleControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
  
  var markers = [];
  var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

  // var defaultBounds = new google.maps.LatLngBounds(
  //     new google.maps.LatLng(-8.052789299999999, -34.94927110000003),
  //     new google.maps.LatLng(-8.052789299999999, -34.94927110000003));
  // map.fitBounds(defaultBounds);

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

    //For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        // url: place.icon,
        url: "image/icon.png",
        size: new google.maps.Size(200, 200),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(50, 100),
        scaledSize: new google.maps.Size(100, 100)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        draggable:true,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      });
      
      // Get the Current position, where the pointer was dropped
    	var point = marker.getPosition();
      document.getElementById('MyCoordinates').value=point.lat()+", "+point.lng();
      
      google.maps.event.addListener(marker, 'dragend', function() {
		
    		// Get the Current position, where the pointer was dropped
    		point = marker.getPosition();
        document.getElementById('MyCoordinates').value=point.lat()+", "+point.lng();
    		
    		// Center the map at given point
    		map.panTo(point);
    	});
      
      markers.push(marker);

      bounds.extend(place.geometry.location);      
    }
    map.fitBounds(bounds);
  });

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

function registrarOcorrencia() {
  
}

google.maps.event.addDomListener(window, 'load', initialize);

