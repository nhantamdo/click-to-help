( function () {

  'use strict';

  Meteor.methods({
    changeAllToRead: function () {
      TaskStatus.find({status: "accepted"})
      .forEach(function (taskStatus){
        TaskStatus.update({status:"accepted"},
          {status:"read",
          taskId:taskStatus.taskId,
          taskerId:taskStatus.taskerId,
          createdAt:taskStatus.createdAt,
          updatedAt:taskStatus.updatedAt});
        });
      }
  });

})();
