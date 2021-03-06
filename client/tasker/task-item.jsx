/**
* @Description: Task Item Notification
* @Author: truongtk,linhnh, toanpp
*/
const{
  List,
  ListItem,
  ListDivider,
  Avatar,
  subheader,
} = mui;

TaskItem = React.createClass({
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
    var taskStatusHandle = Meteor.subscribe("taskStatus");
    var taskHandle = Meteor.subscribe("task");
    var serviceHandle = Meteor.subscribe("service");
    if(taskerHandle.ready() || taskStatusHandle.ready() || taskHandle.ready() || serviceHandle.ready()){
      var result=[];
      var tasker = Tasker.find({email:"linhnh@twin.vn"}).fetch();
      TaskStatus.find({status: {$in: this.props.status}, taskerId:tasker[0]._id},{sort: {updatedAt: -1}})
      .forEach(function (taskStatus){
        task = Task.findOne({_id:taskStatus.taskId});
        service = Service.findOne({id:task.serviceId});
        result.push({
          key: task._id,
          serviceIcon: service.icon,
          description: task.description,
          date: task.date,
          time: task.time,
          address: task.address,
          cost: task.cost,
          duration: task.duration,
          status: taskStatus.status
        });
      });
      return {
        taskerLoading: !taskerHandle.ready(),
        taskStatusLoading: !taskStatusHandle.ready(),
        taskLoading: !taskHandle.ready(),
        serviceLoading: !serviceHandle.ready(),
        tasks: result
      }
    }
    return {
      taskerLoading: true,
      taskStatusLoading: true,
      taskLoading: true,
      serviceLoading: true
    }
  },

  formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
  },

  onDetailClick(taskKey){
    FlowRouter.go('/task-detail-tasker/show-detail?taskKey='+taskKey);
    //React.render(<TaskDetail taskKey={taskKey}/>, document.getElementById("container"));
  },

  listDivider(index,length) {
    let listDividerStyle = {
      marginTop: 0,
    };
    if (index != length-1) return <ListDivider style={listDividerStyle}/>;
  },

  render() {
    if(this.data.taskerLoading || this.data.taskLoading || this.data.serviceLoading || this.data.taskStatusLoading){
      return (<div></div>);
    }
    let primaryTextStyle = {
      overflow: 'hidden',
      whiteSpace: 'pre-line',
      textOverflow: 'ellipsis',
      maxHeight: '32px',
    };
    let unreadStyle = {
      backgroundColor: "#eceff5",
      borderColor: "#d8dfea",
    };
    let readStyle = {
      borderColor: "#d8dfea",
    };
    return <List subheader= {this.props.subheader}>
      {this.listDivider(0,2)}
      {this.data.tasks.map((task,index) => {
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
        styleItem["height"] = "50px";

        let cost = task.cost;
        cost = this.formatMoney(Number(cost));
        return [
        <ListItem
          className="itemTask"
          id={task.key}
          style={(task.status=="unread" || task.status=="new")? unreadStyle:readStyle}
          key={task.key}
          primaryText={ <p style={primaryTextStyle}>
          {task.description}
        </p> }
        secondaryText={
          <p style={styleItem}>
            <span>{time} &nbsp; {date} - làm trong {task.duration}h</span><br/>
            {cost} VND<br/>
          {task.address}
        </p>
      }
      leftAvatar={ <Avatar src={task.serviceIcon}/> }
      onClick={this.onDetailClick.bind(this, task.key)}/>,
    this.listDivider(index,this.data.tasks.length)
    ]
  })
}</List>
}
});
