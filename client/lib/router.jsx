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
      if(params.postId == "post-task"){
        ReactLayout.render(TaskInput, queryParams);
      }
      else if(params.postId == "fill-info"){
        ReactLayout.render(ContactInfo, queryParams);
      }
      else if (params.postId == "post-task-confirm") {
        ReactLayout.render(TaskPostConfirm, queryParams);
      }
    }
});

FlowRouter.route('/ask-list', {
    action: function(params, queryParams) {
      ReactLayout.render(ListTask_Asker);
    }
});
