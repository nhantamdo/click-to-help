Meteor.methods({
  changeToAccepted: function (taskStatus) {
    TaskStatus.update({_id:taskStatus._id},
      {status:"accepted",
      taskId:taskStatus.taskId,
      taskerId:taskStatus.taskerId,
      createdAt:taskStatus.createdAt,
      updatedAt:taskStatus.updatedAt});
    },
    
      removeConfirm: function (taskId) {
        TaskStatus.remove({taskId:taskId, status:"confirmed"});
      }
    });
