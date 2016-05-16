;
window.initMap = function () {
	var map;
	myOptions = {
	  center: {lat: 48.5149281, lng: 34.588731},
	  zoom: 17
	};
  map = new google.maps.Map(document.getElementById("map"), myOptions);	  
  google.maps.visualRefresh = true;

  var marker = new google.maps.Marker({
    position: {lat: 48.5125316, lng: 34.5968432},
    map: map,
    icon: 'img/Google-icon.png'
  });

};

$(document).on('mousemove', function (e){
	google.maps.event.trigger(map, 'resize');
});

