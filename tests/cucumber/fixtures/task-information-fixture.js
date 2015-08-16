( function () {

  'use strict';

  Meteor.methods({
    resetDataConfriming: function(){
      console.log("resetData");
      TaskStatus.update({
        status: "confirmed"
      }, {
        $set: {
          status: "accepted"
        }
      });
    },
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
