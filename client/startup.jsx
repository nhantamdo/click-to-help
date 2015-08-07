Meteor.subscribe("service");
Meteor.subscribe("task");

Meteor.startup(function () {
  injectTapEventPlugin();
  React.render(<App />, document.getElementById("container"));
});
