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
  Paper,
  Overlay,
  List,
  ListItem,
  ListDivider,
  CircularProgress,
  FlatButton
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

ListAskerNotification = React.createClass({
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
    var taskerHandle = Meteor.subscribe("tasker");
    var taskHandle = Meteor.subscribe("task");
    var taskStatusHandle = Meteor.subscribe("taskStatus");
    var serviceHandle = Meteor.subscribe("service");
    var result=[];
    if(serviceHandle.ready() || taskHandle.ready() || taskStatusHandle.ready() || taskerHandle.ready()){
      TaskStatus.find({status:"accepted"},{sort: {updatedAt: -1}})
      .forEach(function (taskStatus){
        task = Task.findOne({_id:taskStatus.taskId});
        service = Service.findOne({id:task.serviceId});
        tasker=Tasker.findOne({_id:taskStatus.taskerId});
        result.push({
          key: task._id,
          avatar: tasker.avatar,
          description: task.description,
          taskerName: tasker.username,
          acceptedAt: taskStatus.updatedAt
        });
      });
     return {
       notif: result,
     };
    }
    return {
    };
  },

  getInitialState () {
    return {
    };
  },
  propTypes: {
  },
  onSkipButton(){
    console.log("On skip button click");
    this.refs.confirmSkip.show();
  },
  onDetailClick(taskKey){
    FlowRouter.go('/task-detail-asker/show-detail?taskKey='+taskKey);
  },

  listDivider(index,length) {
    let listDividerStyle = {
      marginTop: 0,
    };
    if (index != length-1) return <ListDivider style={listDividerStyle}/>;
  },

  render() {

    return (
      <Paper zDepth={1} className="notification">
        <div id="notification">
          <List subheader="notification">{
              (this.data.notif)? (this.data.notif.map((notif,index) => {
                var h = notif.acceptedAt.getHours();
                h = h < 10 ? "0" + h : h;
                var mm = notif.acceptedAt.getMinutes();
                mm = mm < 10 ? "0" + mm : mm;
                var time = h + ":" + mm;

                var d = notif.acceptedAt.getDate();
                d = d < 10 ? "0" + d : d;
                var m = notif.acceptedAt.getMonth() + 1;
                m = m < 10 ? "0" + m : m;
                var y = notif.acceptedAt.getFullYear();
                var date = d + "/" + m + "/" + y;

                let styleItem = {};

                return [
                <ListItem
                  id={notif.key}
                  key={notif.key}
                  primaryText={notif.description}
                  onClick ={this.onDetailClick.bind(this,notif.key)}
                  secondaryText={
                    <p style={styleItem}>
                      {notif.taskerName} accepted at {time}  {date}
                    </p>
                  }
                  leftAvatar={ <Avatar src={notif.avatar? notif.avatar : ""}/> }/>,
                this.listDivider(index,this.data.notif.length)
                ]
              })):<CircularProgress mode="indeterminate" />
            }</List>
          </div>
        </Paper>
      );
    }
  });
