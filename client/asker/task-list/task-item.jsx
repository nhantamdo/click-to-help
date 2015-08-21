/**
* @Description: Task Item of Task List Asker
* @Author: linhnh
*/


const{
  List,
  ListItem,
  ListDivider,
  Avatar,
  subheader,
  RefreshIndicator
} = mui;

TaskItem_Asker = React.createClass({

  getInitialState () {
    return {
    };
  },
  propTypes: {
    status: React.PropTypes.array.isRequired
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    var taskerHandle = Meteor.subscribe("tasker");
    var taskHandle = Meteor.subscribe("task");
    var taskStatusHandle = Meteor.subscribe("taskStatus");
    var serviceHandle = Meteor.subscribe("service");
    if(!serviceHandle.ready() || !taskHandle.ready() || !taskStatusHandle.ready() || !taskerHandle.ready()){
      return {
        taskerLoading: !taskerHandle.ready(),
        taskLoading: !taskHandle.ready(),
        serviceLoading: !serviceHandle.ready(),
        taskStatusLoading: !taskStatusHandle.ready(),
        serviceLoading: !serviceHandle.ready(),
      }
    }

    var status = this.props.status; 
    var result=[];
    TaskStatus.find({status: {$in: status}, taskerId:{$ne:null}},{sort: {updatedAt: -1}})
    .forEach(function (taskStatus){
      var task = Task.findOne({_id:taskStatus.taskId});
      var service = Service.findOne({id:task.serviceId});
      var tasker = [];
      TaskStatus.find({taskId: taskStatus.taskId, status: {$in: status}, taskerId:{$ne:null}})
      .forEach(function(itemTaskStatus){
        tasker.push(Tasker.findOne({_id: itemTaskStatus.taskerId}));
      });
      result.push({
        key: task._id,
        serviceIcon: service.icon,
        description: task.description,
        date: task.date,
        time: task.time,
        address: task.address,
        cost: task.cost,
        duration: task.duration,
        status: taskStatus.status,
        tasker: tasker
      });
    });
    return {
      taskerLoading: !taskerHandle.ready(),
      taskLoading: !taskHandle.ready(),
      serviceLoading: !serviceHandle.ready(),
      taskStatusLoading: !taskStatusHandle.ready(),
      serviceLoading: !serviceHandle.ready(),
      tasks: result
    }
  },

  formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
  },

  onDetailClick(taskKey){
    FlowRouter.go('/task-detail-asker/show-detail?taskKey='+taskKey);
  },

  onClickTaskerAvatar(taskerId){
  },

  render() {
    if(this.data.taskerLoading || this.data.taskLoading || this.data.serviceLoading || this.taskStatusLoading){
      return (<div></div>);
    }
    return <List subheader= {this.props.subheader}>{
      this.data.tasks.map((task,index) => {
        var h = task.time.getHours();
        h = h < 10 ? "0" + h : h;
        var mm = task.time.getMinutes();
        mm = mm < 10 ? "0" + mm : mm;
        var time = h + ":" + mm;

        var d = task.date.getDate();
        d = d < 10 ? "0" + d : d;
        var m = task.date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var y = task.date.getFullYear();
        var date = d + "/" + m + "/" + y;

        let styleItem = {};
        styleItem["height"] = "75px";

        let cost = task.cost;
        cost = this.formatMoney(Number(cost));
        var  listTasker = task.tasker.map((item) => {
          return [
            <Avatar src={item.avatar} onClick={this.onClickTaskerAvatar.bind(this,item._id)} />
          ]
        });
        return [
          <ListItem
          id={task.key}
          className={task.status=="unread"? "unread-task":"task"}
          key={task.key}
          primaryText={
            <span id="itemDescription" onClick={this.onDetailClick.bind(this, task.key)}>
            {task.description}
            </span>
          }
          secondaryText={
            <p style={styleItem}>
            <span>{cost} VND</span><br/>
            {time} &nbsp; {date} - làm trong {task.duration}h<br/>
            {listTasker}
            </p>
          }
          leftAvatar={ <Avatar src={task.serviceIcon} onClick={this.onDetailClick.bind(this, task.key)}/> }
          />,
        ]
      })
    }</List>
  }
});
