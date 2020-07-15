var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('gmap'), {
    center: {lat: 22.733417, lng: 75.886577},
    zoom: 20 // typical is usually 8 or 9
  });
}// end initMap function
var marker = new google.maps.Marker({
  position: {lat: 22.733417, lng: 75.886577}, // lat/long of marker
  map: map,
  animation: google.maps.Animation.DROP, // drops marker in from top
  title: 'MIND Deveopment and Design', // title on hover over marker
  icon: {
    url: 'http://YOURWEBSITE/wp-content/themes/YOURTHEME/img/mind-map-marker.png',
    scaledSize: new google.maps.Size(75, 120)
  }
});