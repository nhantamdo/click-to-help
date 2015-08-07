Meteor.publish("service", function() {
  return Service.find({
  });
});
Meteor.publish("task", function() {
  return Task.find({
  });
});
