/**
* @Description: Tasker Notification
* @Author: truongtk
*/

const{
  AppBar,
  IconButton,
  MenuItem,
  LeftNav,
  CardHeader,
  Avatar,
  Card,
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

ListTaskNotification = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    var thisTaskerId=1;
    var result=[];
    TaskStatus.find({taskerId:thisTaskerId}).forEach(function (taskStatus){
      task=Task.findOne({_id:taskStatus.taskId});
      service=Service.findOne({id:task.serviceId});
      result.push({
        serviceIcon: service.icon,
        serviceText: service.text,
        descripton: task.description,
        date: task.date,
        time: task.time,
        address: task.address
      });
    });
    console.log(result);
    return {
      taskStatus: result,
    }
  },

  getInitialState () {
    return {
    };
  },
  propTypes: {
  },

  renderNotification() {
    return <Card>{
        this.data.taskStatus.map((taskinfo) => {
          return <CardHeader
            title={taskinfo.serviceText}
            avatar={<Avatar src={taskinfo.serviceIcon}/>}/>
        })
      }</Card>
  },

  render() {
    return (
      <div id="notification">
        {this.renderNotification()}
      </div>
    );
  }
});
