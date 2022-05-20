document.getElementById('maiMulte').onclick = function(){
    location = 'http://agroprom.md/noutati.php';
};

function initMap() {
    const uluru = { lat: 47.720708, lng: 28.951786};
    const map = new google.maps.Map(document.getElementById("mapLocation"), {
      zoom: 13,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      mapTypeId: 'satellite'
    });

    map.setMapTypeId('satellite');
  }