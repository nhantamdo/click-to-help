FlowRouter.route('/', {
    action: function(params, queryParams) {
      ReactLayout.render(IntroPage);
    }
});

FlowRouter.route('/list-service', {
    action: function(params, queryParams) {
      ReactLayout.render(PostTask);
    }
});

FlowRouter.route('/list-service/:postId', {
    action: function(params, queryParams) {
      ReactLayout.render(TaskInput);
    }
});

FlowRouter.route('/task-detail-asker/:taskStatusId',{
  action: function(params, queryParams){
    ReactLayout.render(TaskDetailAsker, queryParams);
  }
});

FlowRouter.route('/list-task-asker',{
  action: function(params, queryParams){
    ReactLayout.render(ListTask_Asker);
  }
});
