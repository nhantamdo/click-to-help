Meteor.subscribe("service");
Meteor.subscribe("task");
Meteor.subscribe("taskStatus");
Meteor.subscribe("tasker");

Meteor.startup(function () {
  injectTapEventPlugin();
  React.render(<PostTask/>, document.getElementById("container"));
});
