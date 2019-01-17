var sites = {}
var landColor = "20e000";
var pinImage = new google.maps.MarkerImage(
    "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=L|" + landColor,
    new google.maps.Size(21, 34),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34)
);

var parkingImage = new google.maps.MarkerImage(
    "img/parking.png",
    new google.maps.Size(21, 34),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34)
);

var infoWindow = new google.maps.InfoWindow({ });

function create_sites() {
    var sites = {};
        
    sites["Back_of_Ecton"] = create_site(
        "Back_of_Ecton",
        "Back of Ecton", 
        [],
        [{easting: "410149", northing: "358149", lat: 53.12043, lon: -1.849792 }],
        [],  
        ["NE"]
    );    
    
    sites["Black_Knoll"] = create_site(
        "Black_Knoll",
        "Black Knoll", 
        [],
        [{easting: "339246", northing: "288681", lat: 52.492647, lon: -2.896218 }, {easting: "339481", northing: "289076", lat: 52.496226, lon: -2.892833 }],
        [],  
        ["SW-WNW"]
    );    
    
    sites["Bradwell"] = create_site(
        "Bradwell",
        "Bradwell", 
        [{easting: "418361", northing: "380322", lat: 53.319519, lon: -1.725812 }],
        [{easting: "418083", northing: "380467", lat: 53.320829, lon: -1.729986 }],
        [{easting: "417549", northing: "380649", lat: 53.322486, lon: -1.737992 }],  
        ["WSW-NW"]
    );    
    
    sites["Broadlee_Bank"] = create_site(
        "Broadlee_Bank",
        "Broadlee Bank", 
        [{easting: "411749", northing: "385449", lat: 53.365791, lon: -1.824888 }],
        [{easting: "411549", northing: "386349", lat: 53.373885, lon: -1.827861 }],
        [{easting: "411749", northing: "385449", lat: 53.365791, lon: -1.824888 }],  
        ["SE-SSE"]
    );    
    
    sites["Bunster"] = create_site(
        "Bunster",
        "Bunster", 
        [{easting: "413542", northing: "350913", lat: 53.055311, lon: -1.79939 }],
        [{easting: "414049", northing: "351549", lat: 53.061016, lon: -1.791805 }],
        [],  
        ["E", "SE-SSW", "W"]
    );    
    
    sites["Caer_Caradoc"] = create_site(
        "Caer_Caradoc",
        "Caer Caradoc", 
        [],
        [{easting: "347741", northing: "295586", lat: 52.5556, lon: -2.7722 }],
        [],  
        ["W-NNW"]
    );    
    
    sites["Camlo"] = create_site(
        "Camlo",
        "Camlo", 
        [],
        [{easting: "302799", northing: "270499", lat: 52.323959, lon: -3.4276022 }],
        [],  
        ["SE-SSE", "SW-W"]
    );    
    
    sites["Cat_s_Tor"] = create_site(
        "Cat_s_Tor",
        "Cat's Tor", 
        [{easting: "399414", northing: "376662", lat: 53.286932, lon: -2.010233 }],
        [{easting: "399449", northing: "375949", lat: 53.280526, lon: -2.009709 }],
        [{easting: "399449", northing: "376649", lat: 53.286818, lon: -2.00971 }],  
        ["W-NW"]
    );    
    
    sites["Chelmorton"] = create_site(
        "Chelmorton",
        "Chelmorton", 
        [],
        [{easting: "411649", northing: "370849", lat: 53.234559, lon: -1.826921 }],
        [],  
        ["NNW-N"]
    );    
    
    sites["Clatter"] = create_site(
        "Clatter",
        "Clatter", 
        [],
        [{easting: "300426", northing: "296509", lat: 52.557289, lon: -3.470164 }],
        [],  
        ["SSW-SW"]
    );    
    
    sites["Clunbury"] = create_site(
        "Clunbury",
        "Clunbury", 
        [],
        [{easting: "337772", northing: "280247", lat: 52.41667, lon: -2.916356 }],
        [],  
        ["WNW-NNW"]
    );    
    
    sites["Cocking_Tor"] = create_site(
        "Cocking_Tor",
        "Cocking Tor", 
        [],
        [{easting: "434748", northing: "360749", lat: 53.142771, lon: -1.481949 }],
        [{easting: "434748", northing: "360649", lat: 53.141872, lon: -1.48196 }],  
        ["NE"]
    );    
    
    sites["Corndon"] = create_site(
        "Corndon",
        "Corndon", 
        [],
        [{easting: "331103", northing: "296682", lat: 52.5636, lon: -3.0178 }],
        [],  
        ["N-SE"]
    );    
    
    sites["Curbar_Edge"] = create_site(
        "Curbar_Edge",
        "Curbar Edge", 
        [],
        [{easting: "426048", northing: "374849", lat: 53.270005, lon: -1.610863 }],
        [],  
        ["SW-WSW"]
    );    
    
    sites["Dale_Head"] = create_site(
        "Dale_Head",
        "Dale Head", 
        [],
        [{easting: "409649", northing: "383849", lat: 53.351451, lon: -1.856494 }],
        [{easting: "410449", northing: "384649", lat: 53.358627, lon: -1.84445 }],  
        ["NE-ESE"]
    );    
    
    sites["Edge_Top"] = create_site(
        "Edge_Top",
        "Edge Top", 
        [],
        [{easting: "405549", northing: "365749", lat: 53.188813, lon: -1.918396 }],
        [],  
        ["SSW-WSW"]
    );    
    
    sites["Eyam_Edge"] = create_site(
        "Eyam_Edge",
        "Eyam Edge", 
        [],
        [{easting: "420349", northing: "377749", lat: 53.29632, lon: -1.696143 }],
        [],  
        ["S-SW"]
    );    
    
    sites["High_Edge"] = create_site(
        "High_Edge",
        "High Edge", 
        [],
        [{easting: "406349", northing: "368949", lat: 53.217568, lon: -1.906361 }],
        [],  
        ["NE-E"]
    );    
    
    sites["High_Wheeldon"] = create_site(
        "High_Wheeldon",
        "High Wheeldon", 
        [{easting: "410542", northing: "365977", lat: 53.190788, lon: -1.843661 }],
        [{easting: "410148", northing: "366049", lat: 53.191443, lon: -1.849545 }],
        [],  
        ["SW-WSW"]
    );    
    
    sites["Lan_Fawr"] = create_site(
        "Lan_Fawr",
        "Lan Fawr", 
        [],
        [{easting: "329639", northing: "296703", lat: 52.5636, lon: -3.0394 }],
        [],  
        ["W-NW"]
    );    
    
    sites["Llandinam"] = create_site(
        "Llandinam",
        "Llandinam", 
        [],
        [{easting: "302861", northing: "287299", lat: 52.474955, lon: -3.431573 }],
        [],  
        ["W-WNW"]
    );    
    
    sites["Long_Cliff"] = create_site(
        "Long_Cliff",
        "Long Cliff", 
        [],
        [{easting: "413849", northing: "382549", lat: 53.339674, lon: -1.793456 }],
        [{easting: "414048", northing: "383149", lat: 53.345062, lon: -1.790426 }],  
        ["NNE-ENE"]
    );    
    
    sites["Long_Mynd"] = create_site(
        "Long_Mynd",
        "Long Mynd", 
        [],
        [{easting: "340481", northing: "291831", lat: 52.5211, lon: -2.8786 }],
        [],  
        ["WSW-WNW"]
    );    
    
    sites["Lord_s_Seat"] = create_site(
        "Lord_s_Seat",
        "Lord's Seat", 
        [{easting: "412361", northing: "383189", lat: 53.34546, lon: -1.815769 }],
        [{easting: "411948", northing: "383549", lat: 53.348708, lon: -1.821954 }, {easting: "411049", northing: "383549", lat: 53.348728, lon: -1.835473 }],
        [{easting: "411248", northing: "384149", lat: 53.354116, lon: -1.832448 }],  
        ["NNW-NE"]
    );    
    
    sites["Mam_Tor_E"] = create_site(
        "Mam_Tor_E",
        "Mam Tor E", 
        [{easting: "412361", northing: "383189", lat: 53.34546, lon: -1.815769 }],
        [{easting: "412849", northing: "383749", lat: 53.350485, lon: -1.808426 }],
        [{easting: "414048", northing: "383149", lat: 53.345062, lon: -1.790426 }],  
        ["NE-SE"]
    );    
    
    sites["Mam_Tor_NW"] = create_site(
        "Mam_Tor_NW",
        "Mam Tor NW", 
        [{easting: "412361", northing: "383189", lat: 53.34546, lon: -1.815769 }],
        [{easting: "412749", northing: "383649", lat: 53.349588, lon: -1.809932 }],
        [{easting: "413948", northing: "385049", lat: 53.362142, lon: -1.791845 }],  
        ["WNW-NNW"]
    );    
    
    sites["Rushup"] = create_site(
        "Rushup",
        "Rushup", 
        [{easting: "412361", northing: "383189", lat: 53.34546, lon: -1.815769 }],
        [{easting: "411831", northing: "383428", lat: 53.347625, lon: -1.823719 }],
        [{easting: "412526", northing: "383066", lat: 53.344353, lon: -1.813305 }],  
        ["SE-SW"]
    );    
    
    sites["Sarn"] = create_site(
        "Sarn",
        "Sarn", 
        [],
        [{easting: "322748", northing: "290149", lat: 52.503754, lon: -3.139499 }],
        [],  
        ["NNW-N"]
    );    
    
    sites["Shepherds_Tump"] = create_site(
        "Shepherds_Tump",
        "Shepherds Tump", 
        [],
        [{easting: "317403", northing: "265355", lat: 52.28012, lon: -3.212112 }],
        [],  
        ["SSW-SW"]
    );    
    
    sites["Shining_Tor"] = create_site(
        "Shining_Tor",
        "Shining Tor", 
        [{easting: "399221", northing: "373326", lat: 53.256947, lon: -2.013107 }, {easting: "398906", northing: "373579", lat: 53.259225, lon: -2.017839 }, {easting: "400137", northing: "371868", lat: 53.243844, lon: -1.999385 }],
        [{easting: "399549", northing: "373749", lat: 53.260751, lon: -2.008205 }],
        [],  
        ["SW-WNW"]
    );    
    
    sites["Stanage_Edge"] = create_site(
        "Stanage_Edge",
        "Stanage Edge", 
        [],
        [{easting: "425149", northing: "382849", lat: 53.341956, lon: -1.623726 }, {easting: "424548", northing: "383349", lat: 53.346478, lon: -1.632699 }],
        [],  
        ["SW"]
    );    
    
    sites["The_Lawley"] = create_site(
        "The_Lawley",
        "The Lawley", 
        [],
        [{easting: "350199", northing: "298553", lat: 52.5825, lon: -2.7364 }],
        [],  
        ["W-NNW"]
    );    
    
    sites["The_Wrekin"] = create_site(
        "The_Wrekin",
        "The Wrekin", 
        [],
        [{easting: "362821", northing: "308102", lat: 52.669352, lon: -2.55121 }],
        [],  
        ["WNW-NNW", "ESE-SE"]
    );    
    
    sites["Treak_Cliff"] = create_site(
        "Treak_Cliff",
        "Treak Cliff", 
        [{easting: "413102", northing: "383295", lat: 53.346394, lon: -1.804632 }],
        [{easting: "413449", northing: "382949", lat: 53.343279, lon: -1.799446 }],
        [{easting: "414048", northing: "383149", lat: 53.345062, lon: -1.790426 }],  
        ["NNE-ENE"]
    );    
    
    sites["Wetton_Hill"] = create_site(
        "Wetton_Hill",
        "Wetton Hill", 
        [{easting: "410754", northing: "355651", lat: 53.097961, lon: -1.840824 }],
        [{easting: "411449", northing: "356349", lat: 53.104224, lon: -1.830431 }],
        [],  
        ["W-N"]
    );    
    return sites;
}

function create_site(id, name, parkings, takeoffs, landings, wind) {
      var icon = icon_url("small", name);
      site = {
        id          : id,
        name        : name,
        parkings    : create_markers(id, name, parkings, parkingImage), 
        takeoffs    : create_markers(id, name, takeoffs, {url: icon, anchor: new google.maps.Point(12, 12)}),
        landings    : create_markers(id, name, landings, pinImage),
      }
      
      site.info = site.takeoffs[0].info;
      
      return site;
  }
  
function show_url(id) {
    var url = "#" + id;
    $( '#url-dialog' ).html(
        "<p>Copy the following link to share.</p>" +
        "<a href='" + url + "'>Direct Link</a>"
    );
    $( '#url-dialog' ).dialog();
  }

function add_info_window(place) {
    var name = place.name;
    var id = place.id;
    var marker = place.marker;
    var icon = icon_url("large", name);
    var lat = place.lat;
    var lon = place.lon;
    var osGrid = place.osGrid;
    var f = function() {
        infoWindow.setContent(
            "<div>" +
              "<h1>" + name + "</h1>" +
                  "<div style=\"padding: 0.5em;\">" +
                      "<img src=\"" + icon + "\"/>" +
                  "</div>" +
                  "<p>" +
                    "<a href=\"guides/" + id + ".pdf\" target=\"guide\">Guide</a><br/>" +
                    "<a href=\"" + maps_url(lat, lon, 9, false) + "\">Directions</a><br/>" +
                    "<a href=\"" + maps_url(lat, lon, 15, true) + "\">Satellite View</a><br/>" +
                    <!-- "<a href=\"http://www.streetmap.co.uk/ids.srf?mapp=map.srf&searchp=ids&name=" + lat + "," + lon + "&type=LatLong\">OS Map</a><br/>" + -->
                    "<a href=\"http://www.streetmap.co.uk/grid/" + place.easting + "," + place.northing + "_115\">OS Map</a><br/>" +
                    "<a href=\"javascript:show_url('" + id + "')\">Bookmark Site</a><br/>" +
                  "</p>" +
            "</div>");
        infoWindow.open(map,marker);
      };
      google.maps.event.addListener(marker, 'click', f);
      place.info = f;
  }
  
  function create_markers(id, name, places, icon) {
    var i;
    for (i = 0; i < places.length; i++) {
        var t = places[i];
        t.id = id;
        t.name = name;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(t.lat, t.lon),
            map: map,
            title: name,
            icon: icon,
            draggable: false,
        });
        t.marker = marker;
        add_info_window(t); 
    }
    return places;
  }
  
  function create_landings(id, place, landings) {
    var i;
    for (i = 0; i < landings.length; i++) {
        var l = landings[i];
        var icon = icon_url("small", place);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(l.lat, l.lon),
            map: null, // map,
            title: place,
            icon: pinImage,
            draggable: false,
        });
        l.marker = marker;
    }
    return landings;
  }

  function create_parkings(id, place, landings) {
    var i;
    for (i = 0; i < landings.length; i++) {
        var l = landings[i];
        var icon = icon_url("small", place);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(l.lat, l.lon),
            map: null, //map,
            title: place,
            icon: parkingImage,
            draggable: false,
        });
        l.marker = marker;
    }
    return landings;
  }


  function icon_url(type, place) {
      return "site-icons/" + type + "/" + safe_name(place) + ".png";
  }
  function safe_name(place) {
      return place.replace(/'/g, "_").replace(/ /g, "_");
  }

  function maps_url(lat, lng, zoom, satellite) {
    //return "https://www.google.co.uk/maps/place/" + String(lat) + "," + String(lng) + "/@" + String(lat) + "," + String(lng) + "," + String(zoom) + "z";
    //return "https://www.google.com/maps/embed/v1/place?key=AIzaSyDYEr0NL0JlKdlNchfiRmCPJVDL9bRqsZc&q=" + String(lat) + "," + String(lng) + "&zoom=" + String(zoom) + "z&maptype=" + (satellite ? "satellite" : "roadmap");
    //return "http://maps.google.com/maps?q=" + lat + "," + lng + "&t=(satellite ? "k" : "m")
    var t = (satellite ? "k" : "m")
    var latlon = lat + "," + lng;
    return "https://maps.google.com/?q=" + latlon + "&ll=" + latlon + "&t=" + t + "&z=" + zoom;
  }

  function initialize() {
    var myLatlng = new google.maps.LatLng(53.23455851981886,-1.8269212925847522);
    var mapOptions = {
      zoom: 8,
      center: myLatlng,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT,
        position: google.maps.ControlPosition.BOTTOM_LEFT
      },        
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    sites = create_sites();
    if (sites[window.location.hash.substring(1)]) {
        sites[window.location.hash.substring(1)].info();
    }
    toggleLanding()
    toggleParking()
 }

 function toggleLanding() {
    var vis = $('#toggleLanding').prop('checked');
    var s, site
    for (s in sites) {
        site = sites[s];
        var i;
        for (i = 0; i < site.landings.length; i++) {
            site.landings[i].marker.setMap(vis ? map : null);
        }
    }
 }
 
function toggleParking() {
    var vis = $('#toggleParking').prop('checked');
    var s, site
    for (s in sites) {
        site = sites[s];
        var i;
        for (i = 0; i < site.parkings.length; i++) {
            site.parkings[i].marker.setMap(vis ? map : null);
        }
    }
 }
