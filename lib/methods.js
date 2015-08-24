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
        status: "new",
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
      updatedAt: new Date()
    });
  },
  changeToRead: function(taskStatus) {
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
  },
  changeTaskStatus: function(taskStatus, status){
    TaskStatus.update({
      _id: taskStatus._id
    },
    {
      status: status,
      taskId: taskStatus.taskId,
      taskerId: taskStatus.taskerId,
      createdAt: taskStatus.createdAt,
      updatedAt: new Date()
    });
  },

  changeToUnread: function(tasker) {
    TaskStatus.update({
      status: "new"
    }, {
      $set: {
        status: "unread"
      }
    });
  },

  changeToReject: function(taskStatusId) {
    TaskStatus.update({
        _id: taskStatusId
    },{
      $set: {
        status: "reject"
      }
    });
  },

  cancelTask: function(taskId){
    TaskStatus.update({
      taskId:taskId
    },
    {
      $set: {
        status:"cancel"
      }
    });
  },

  askerUpdateClick: function(askerId) {
    ClickStatus.update({
      type: 0,
      userId: askerId
    },
    {
      $set: {
        clickAt: new Date()
      }
    });
  },

  TaskerUpdateClick: function(TaskerId) {
    ClickStatus.update({
      type: 1,
      userId: TaskerId
    },
    {
      $set: {
        clickAt: new Date()
      }
    });
  }
});
