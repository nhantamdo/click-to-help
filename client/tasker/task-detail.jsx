/**
* @Description: See detail of task, so that Tasker can accept or skip
* @Author: toanpp
*/

const{
  AppBar,
  IconButton,
  TextField,
  DatePicker,
  TimePicker,
  Slider,
  RaisedButton,
  CardTitle,
  CardActions,
  FlatButton,
  CardText,
  Paper,
  Card,
  CardHeader,
  Avatar
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);

TaskDetail = React.createClass({
  propTypes: {
    taskKey: React.PropTypes.string.isRequired
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState () {
    return {
      viewNotification: false
    };
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    var handle = Meteor.subscribe("task");
    var taskStatusHandle = Meteor.subscribe("taskStatus");

    return {
      taskLoading:! handle.ready(),
      taskStatusLoading:! taskStatusHandle.ready(),
      tasks:Task.find({_id:this.props.taskKey}).fetch(),
      taskStatus:TaskStatus.find({taskId:this.props.taskKey, status:"accepted", taskerId:{$ne:null}}).fetch(),
      taskStatusConfirm:TaskStatus.find({taskId:this.props.taskKey, status:"confirmed", taskerId:{$ne:null}}).fetch()
    }
  },
  formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
  },

  onBack(){
    React.render(<HomePage />, document.getElementById("container"));
  },

  onSkipClick(){
    React.render(<ListTask_Tasker/>, document.getElementById("container"));
  },
  onAcceptClick(){
    var task  = this.data.tasks[0];
    var tasker = Tasker.find({email:"toanpp@twin.vn"}).fetch();
    var taskStatus = TaskStatus.find({taskerId:tasker[0]._id, taskId:task._id,status:{$in: ["read","unread"]} }).fetch();
    Meteor.call("changeToAccepted", taskStatus._id);
    //TaskStatus.update({_id:taskStatus._id}, {status:"accepted"});
    console.log(TaskStatus.find({taskerId:tasker._id, taskId:task._id,status:{$in: ["read","unread"]} }).fetch());
  },

  onClickNotification(e) {
    this.setState({
      viewNotification: !this.state.viewNotification
    });
  },

  render() {
    if (this.data.taskLoading || this.data.taskStatusLoading) {
      return (
        <div id="taskDetailContainer">
        <AppBar title="Task detail"
        iconElementRight={
          <div>
          <IconButton iconClassName="icon-notification"
          onClick={this.onClickNotification}/>
          <IconButton iconClassName="icon-help" />
          <IconButton iconClassName="icon-back" onClick={this.onBack} />
          </div>
        } />
        </div>
      );
    }
    var task  = this.data.tasks[0];
    var tasker = Tasker.find({email:"toanpp@twin.vn"}).fetch();
    console.log(tasker);
    var taskStatus = TaskStatus.find({taskerId:tasker[0]._id, taskId:task._id,status:{$in: ["accepted"]} }).fetch();
    var isAccepted = false;
    if(taskStatus.length > 0){
      isAccepted = true;
    }
    console.log(taskStatus);
    var numberAccepted = this.data.taskStatus.length;
    var numberConfirmed = this.data.taskStatusConfirm.length;
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
    let cost = task.cost;
    cost = this.formatMoney(Number(cost));

    var service = Service.findOne({id:task.serviceId});
    let style = {};
    style["color"] = "red";
    style["font-weight"] = "bold";
    let boldStyle = {};
    boldStyle["font-weight"] = "bold";
    let subText = {};
    subText["color"]="rgba(0, 0, 0, 0.54)";
    let avatarStyle = {};
    avatarStyle["magin-left"] = "40%";
    avatarStyle["magin-right"] = "40%";
    return (
      <div id="taskDetailContainer">
      <AppBar title="Task information"
      iconElementRight={
        <div>
        <IconButton iconClassName="icon-notification"
        onClick={this.onClickNotification}/>
        <IconButton iconClassName="icon-help" />
        <IconButton iconClassName="icon-back" onClick={this.onBack} />
        </div>
      } />
      {this.state.viewNotification? <ListTaskNotification />:
        <Card zDepth={0}>
        <Avatar src={service.icon} size={75} style={avatarStyle}/>
        <CardTitle style={boldStyle}
        title={task.description}
        />
        <CardText style={subText}>At: {time} &nbsp; {date} - Duration {task.duration}h</CardText>
        <CardText style={subText}>Cost: {cost} VND</CardText>
        <CardText style={subText}>Location: {task.address}</CardText>
        <CardText style={subText}>Contact: {task.phone} - {task.email}</CardText>
        {numberConfirmed==0?<CardText style={style}>{numberAccepted==0? "No one accepted":numberAccepted==1? "Have 1 tasker accepted":"Have ".concat(numberAccepted).concat(" taskers accepted")}</CardText>:<CardText style={style}>This task is comfirmed</CardText>}
        <CardActions>
        <RaisedButton
        id="btnSkip"
        label="Skip"
        secondary={true}
        onClick={this.onSkipClick} />
        {numberConfirmed==0 && isAccepted==false?
          <RaisedButton
          id="btnGetIt"
          label="Accept"
          primary={true}
          onClick={this.onAcceptClick}/>:<span></span>
        }

        </CardActions>
        </Card>
      }

      </div>
    );
  }
});
