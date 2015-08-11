Meteor.subscribe("service");
Meteor.subscribe("task");
Meteor.subscribe("taskStatus");
Meteor.subscribe("tasker");

Meteor.startup(function () {
  injectTapEventPlugin();
  React.render(<HomePage/>, document.getElementById("container"));
});
