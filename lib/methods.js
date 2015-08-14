Meteor.methods({
  addTask: function(props) {
    taskId = Task.insert({
      serviceId: props.serviceId,
      description: props.description,
      date: props.date,
      time: props.time,
      duration: props.duration,
      cost: props.cost,
      address: props.address,
      phone: props.phone,
      name: props.name,
      email: props.email,
      createAt: new Date()
    });
    Tasker.find().forEach(function(tasker) {
      TaskStatus.insert({
        taskId: taskId,
        taskerId: tasker._id,
        status: "unread",
        new: true,
        createdAt: new Date()
      });
    });
    return taskId;
  }
});
