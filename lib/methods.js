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
  },
  changeToAccepted: function(taskStatus) {
    TaskStatus.update({
      _id: taskStatus._id
    },
      {
        status: "accepted",
        taskId: taskStatus.taskId,
        taskerId: taskStatus.taskerId,
        createdAt: taskStatus.createdAt,
        updatedAt: taskStatus.updatedAt
      });
  },
  changeToRead: function(taskStatus) {
    console.log("dadas");
    TaskStatus.update({
      _id: taskStatus._id
    },
      {
        status: "read",
        taskId: taskStatus.taskId,
        taskerId: taskStatus.taskerId,
        createdAt: taskStatus.createdAt,
        updatedAt: taskStatus.updatedAt
      });
  },
  removeConfirm: function(taskId) {
    TaskStatus.remove({
      taskId: taskId,
      status: "confirmed"
    });
  }
});
