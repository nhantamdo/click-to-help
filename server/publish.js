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
Meteor.publish("user", function() {
  return User.find({
  });
});
Meteor.publish("askerClickQuery", function(phone) {
  return ClickStatus.find({userId : phone});
});
Meteor.publish("TaskerClickQuery", function() {
  return ClickStatus.find({});
});
Meteor.publish("userChannel", function() {
  return UserChannel.find({});
});
