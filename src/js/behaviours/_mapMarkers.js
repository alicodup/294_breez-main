/*
  Dependencies + Imports
*/

export default () => ({
  /*
    Variables
  */
  name: "mapMarkers",
  map: null,
  /*
    Functions
  */
  initMap() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(34.05188515776426, -118.24742997934405),
      zoom: 12,
      // disableDefaultUI: true
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true
    });

    // Map marker icons
    const icons = {
      store: {
        icon: "/map/store-icon.png"
      },
      delivery: {
        icon: "/map/delivery-icon.png"
      }
    };

    // Map to be populated
    const features = [
      {
        position: new google.maps.LatLng(
          34.05557798426999,
          -118.24580938320099
        ),
        type: "store"
      },
      {
        position: new google.maps.LatLng(
          34.07513665089557,
          -118.24569751811033
        ),
        type: "delivery"
      },
      {
        position: new google.maps.LatLng(
          34.06066135449151,
          -118.26090537671223
        ),
        type: "store"
      },
      {
        position: new google.maps.LatLng(
          34.04007525646737,
          -118.23221572292742
        ),
        type: "delivery"
      }
    ];

    // Create markers
    for (let i = 0; i < features.length; i++) {
      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].type].icon,
        map: this.map
      });
    }
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {}
});
