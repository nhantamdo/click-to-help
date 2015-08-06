Meteor.subscribe("service");

Meteor.startup(function () {
  injectTapEventPlugin();
  React.render(<PostTask />, document.getElementById("container"));
});
