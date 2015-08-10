Meteor.publish("service", function() {
  return Service.find({
  });
});
Meteor.publish("task", function() {
  return Task.find({
  });
});
Meteor.publish("taskStatus", function() {
  return TaskStatus.find({
  });
});
Meteor.publish("tasker", function() {
  return Tasker.find({
  });
});
