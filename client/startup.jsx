Meteor.subscribe("service");

Meteor.startup(function () {
  injectTapEventPlugin();
  React.render(<App />, document.getElementById("container"));
});
