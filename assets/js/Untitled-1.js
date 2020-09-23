    //show search on search icon click
    //global variables - could add more here
    var locationLat = [];
    var locationLng = [];
    var locMarker;
    var infoDiv = document.getElementById('storeinfo');
    var infoDivInner = document.getElementById('infoDivInner');
    var toggleSearch = document.getElementById('searchIcon');
    var hasCircle = 0;
    var circle = [];
    //close store infor when x is clicked
    var userLocation;
    $("#infoClose").click(function() {
      $("#storeinfo").hide();
      if (map.hasLayer(circle)) {
        map.removeLayer(circle);
      }
    });
    var listings = document.getElementById('listingDiv');
    var stores = L.geoJson().addTo(map);
    var storesData = omnivore.csv('assets/data/stores.csv');
    
    function setActive(el) {
      var siblings = listings.getElementsByTagName('div');
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].className = siblings[i].className
          .replace(/active/, '').replace(/\s\s*$/, '');
      }
      el.className += ' active';
    }
    
    function sortGeojson(a,b,prop) {
      return (a.properties.name.toUpperCase() < b.properties.name.toUpperCase()) ? -1 : ((a.properties.name.toUpperCase() > b.properties.name.toUpperCase()) ? 1 : 0);
    }
    
    storesData.on('ready', function() {

      var storesSorted = storesData.toGeoJSON();
      //console.log(storesSorted);
      var sorted = (storesSorted.features).sort(sortGeojson)
      //console.log(sorted);
      storesSorted.features = sorted;
      //console.log(storesSorted)
      stores.addData(storesSorted);
      
      map.fitBounds(stores.getBounds());
      toggleSearch.onclick = function() {
        var s = document.getElementById('searchbox');
        if (s.style.display != 'none') {
          s.style.display = 'none';
          toggleSearch.innerHTML = '<i class="fa fa-search"></i>';
          $("#search-input").val("");

          //search.collapse();
          document.getElementById('storeinfo').style.display = 'none';
          $('.item').show();
        } else {
          toggleSearch.innerHTML = '<i class="fa fa-times"></i>';
          s.style.display = 'block';

          //attempt to autofocus search input field when opened
          $('#search-input').focus();
        }
      };
      stores.eachLayer(function(layer) {

        //New jquery search
        $('#searchbox').on('change paste keyup', function() {
          var txt = $('#search-input').val();
          $('.item').each(function() {
            if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        });