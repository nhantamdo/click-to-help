Meteor.methods({
  changeToAccepted: function (taskStatusId) {
    TaskStatus.update({_id:taskStatusId},
      {status:"accepted"});
    }
  });
