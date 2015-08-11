/**
* @Description: Task Item Notification
* @Author: truongtk,linhnh
*/
const{
  List,
  ListItem,
  ListDivider,
  Avatar
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
    var result=[];
    TaskStatus.find({status: {$in: this.props.status}},{sort: {updatedAt: -1}})
    .forEach(function (taskStatus){
      task = Task.findOne({_id:taskStatus.taskId.insertedId});
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
    console.log(result);
    return {
      tasks: result,
    }

    // let listItem = [];
    // var d = TaskStatus.find({status: {$in: this.props.status}},{sort: {updatedAt: -1}}).fetch();
    // d.forEach(function(item){
    //   listItem.push(item.taskId.insertedId);
    // });
    // return {
    //   tasks: Task.find({_id: {$in: listItem}}).fetch()
    // }
  },

  formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
  },

  render() {
    return <List>{
        this.data.tasks.map((task) => {
          //var service = Service.findOne({id: task.serviceId});
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
            className={task.status=="unread"? "unread-task":"task"}
            key={task.key}
            primaryText={ task.description }
            secondaryText={
              <p style={styleItem}>
                <span>{time} &nbsp; {date} - làm trong {task.duration}h</span><br/>
                {cost} VND<br/>
              {task.address}
            </p>
          }
          leftAvatar={ <Avatar src={task.serviceIcon}/> }/>,
        <ListDivider/>
        ]
      })
    }</List>
  }
});
