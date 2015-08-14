( function () {

  'use strict';

  Meteor.methods({
    changeAllToRead: function () {
      TaskStatus.update({status:"accepted"},
        {status:"accepted",
        taskId:taskStatus.taskId,
        taskerId:taskStatus.taskerId,
        createdAt:taskStatus.createdAt,
        updatedAt:taskStatus.updatedAt});
      }
  });

})();
