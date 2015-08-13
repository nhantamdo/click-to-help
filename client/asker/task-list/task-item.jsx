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
    var status = this.props.status;
    var result=[];
    TaskStatus.find({status: {$in: status}},{sort: {updatedAt: -1}})
    .forEach(function (taskStatus){
      task = Task.findOne({_id:taskStatus.taskId});
      service = Service.findOne({id:task.serviceId});
      tasker = [];
      TaskStatus.find({taskId: taskStatus.taskId,status: {$in: status}}).forEach(function(itemTaskStatus){
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
      tasks: result,
    }
  },

  formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
  },

  onDetailClick(taskKey){
    React.render(<TaskDetail taskKey={taskKey}/>, document.getElementById("container"));
  },

  render() {
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
          let listTasker = task.tasker.map((item) => {
            return [
              <Avatar src={item.avatar} />
            ]
          });
          return [
          <ListItem
            id={task.key}
            className={task.status=="unread"? "unread-task":"task"}
            key={task.key}
            primaryText={ task.description }
            secondaryText={
              <p style={styleItem}>
                <span>{cost} VND</span><br/>
                {time} &nbsp; {date} - làm trong {task.duration}h<br/>
                {listTasker}
              </p>
          }
          leftAvatar={ <Avatar src={task.serviceIcon}/> }
          onClick={this.onDetailClick.bind(this, task.key)}/>,
        ]
      })
    }</List>
  }
});
