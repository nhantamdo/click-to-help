mui = require('material-ui');
injectTapEventPlugin = require('react-tap-event-plugin');
// Load the Google Maps API on startup
Meteor.startup(function() {
  GoogleMaps.load({
    key: 'AIzaSyAq2jszIdxHcJGxhVgun74FhF-cocyIyVM',
    libraries: 'places'
  });
});
