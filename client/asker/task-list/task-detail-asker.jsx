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
  Card,
  CardHeader,
  Avatar,
  Snackbar,
  Checkbox
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPaletteAsker);

TaskDetailAsker = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  propTypes: {
    taskKey: React.PropTypes.string.isRequired
  },

  getInitialState () {
    return {
      viewNotification: false,
      lstTasker:[]
    };
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },


  mixins: [ReactMeteorData],
  getMeteorData() {
    //Subcribe data need in this page.

    var handle = Meteor.subscribe("task");
    var taskStatusHandle = Meteor.subscribe("taskStatus");
    var serviceHandle = Meteor.subscribe("service");
    var taskerHandle = Meteor.subscribe("tasker");

    this.chooseTaskerId = null;
    this.accepted = false;
    this.chooseTaskerObject = null;
    this.lstTasker = [];
    return {
      taskLoading:! handle.ready(),
      taskStatusLoading:! taskStatusHandle.ready(),
      serviceLoading:!serviceHandle.ready(),
      taskerLoading:!taskerHandle.ready(),
      tasks:Task.find({_id:this.props.taskKey}).fetch(),
      taskStatus:TaskStatus.find({taskId:this.props.taskKey, status:"accepted", taskerId:{$ne:null}}).fetch(),
      taskConfirmed:TaskStatus.find({taskId:this.props.taskKey, status:"confirmed", taskerId:{$ne:null}}).fetch()
    }
  },



  formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
  },

  onBack(){
    FlowRouter.go('/list-task-asker');
    //React.render(<ListTask_Asker />, document.getElementById("container"));
  },

  onBackClick(){
    FlowRouter.go('/list-task-asker');
  },

  onCancelClick(){
    this.refs.cancelConfirmSnackbar.show();
  },

  onAcceptClick(){
    if(this.chooseTaskerId != null){
      var task  = this.data.tasks[0];
      var taskS = TaskStatus.find({taskId:task._id, taskerId:this.chooseTaskerId}).fetch()[0];
      Meteor.call("changeTaskStatus", taskS, "confirmed");
      this.refs.AcceptSuccess.show();
    }else{
      this.refs.errorAccept.show();
    }

  },

  _handleAction() {
    //We can add more code to this function, but for now we'll just include an alert.
    console.log("Cancel task in this task.");
    this.refs.cancelConfirmSnackbar.dismiss();
  },
  _handleActionClose() {
    //We can add more code to this function, but for now we'll just include an alert.
    this.refs.errorAccept.dismiss();
    this.refs.AcceptSuccess.dismiss();
  },

  onClickNotification(e) {
    this.setState({
      viewNotification: !this.state.viewNotification
    });
  },

  onCheckClick(event, checked){
    var taskerId = event.target.value;
    if(checked==true){
      this.chooseTaskerId = taskerId;
    }
    this.lstTasker
    .forEach(function (tasker){
      if(tasker.tasker._id != taskerId && checked == true){
        this.refs[tasker.tasker._id].setChecked(false);
      }
    });

  },
  componentDidMount: function() {
    //this.refs.txtDescription.focus();

  },


  render() {
    if (this.data.taskLoading || this.data.taskStatusLoading || this.data.taskerLoading, this.data.serviceLoading) {
      return (
        <div id="taskDetailContainer">
        <AskerAppBAr title="Confirming" onBack={this.onBack} />
        </div>
      );
    }
    var lstTasker = [];
    var task  = this.data.tasks[0];
    TaskStatus.find({taskId:task._id, status:"accepted", taskerId:{$ne:null}})
    .forEach(function (taskStatus){
      var Acceptedtasker = {}
      Acceptedtasker["tasker"] = Tasker.find({_id:taskStatus.taskerId}).fetch()[0];
      var aH = taskStatus.updatedAt.getHours();
      var aM = taskStatus.updatedAt.getMinutes();
      var aTime = aH + ":" + aM;
      var aD = taskStatus.updatedAt.getDate();
      var aMonth = taskStatus.updatedAt.getMonth();
      var aY = taskStatus.updatedAt.getFullYear();
      var ADate = aD + "/" + aMonth + "/" + aY;
      Acceptedtasker["acceptedAt"] = "Accepted at " + aTime + " " + ADate;
      lstTasker.push(Acceptedtasker);
    });
    this.lstTasker = lstTasker;
    var choosedTasker = null;
    var choosedAt = null;
    if(this.data.taskConfirmed.length > 0){
      choosedTasker = Tasker.find({_id:this.data.taskConfirmed[0].taskerId}).fetch()[0];
      var aH = this.data.taskConfirmed[0].updatedAt.getHours();
      var aM = this.data.taskConfirmed[0].updatedAt.getMinutes();
      var aTime = aH + ":" + aM;
      var aD = this.data.taskConfirmed[0].updatedAt.getDate();
      var aMonth = this.data.taskConfirmed[0].updatedAt.getMonth();
      var aY = this.data.taskConfirmed[0].updatedAt.getFullYear();
      var ADate = aD + "/" + aMonth + "/" + aY;
      choosedAt = "Confirmed at " + aTime + " " + ADate;
    }


    var service = Service.findOne({id:task.serviceId});

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

    let style = {};
    style["color"] = "red";
    style["fontWeight"] = "bold";
    let boldStyle = {
    };
    let subText = {};
    let taskerStyle = {float:"left",display:"block"};
    let checkBoxStyle = {display:"block", marginTop:"16px"};
    subText["color"]="rgba(0, 0, 0, 0.54)";
    let avatarStyle = {
      marginLeft:"16px",
      marginTop:"10px",
      marginRight:"5px",
      float:"left"
    };
    return (

      <div id="taskDetailContainer">
      <div className="appbar">
      <AskerAppBAr title="Confirming" onBack={this.onBack} />
      </div>
      {this.state.viewNotification? <ListTaskNotification />:{}}

      <div className="main">
      <Snackbar ref="cancelConfirmSnackbar"
      message="Are you sure?"
      action="Cancel now"
      autoHideDuration={0}
      onActionTouchTap={this._handleAction}/>
      <Snackbar ref="errorAccept"
      message="Please choose one tasker!"
      action="Close"
      autoHideDuration={0}
      onActionTouchTap={this._handleActionClose}
      />
      <Snackbar ref="AcceptSuccess"
      message="Accept succesful!"
      action="Close"
      autoHideDuration={0}
      onActionTouchTap={this._handleActionClose}
      />
      <Card zDepth={0}>
      <div className="taskDescription">

      <Avatar src={service.icon} style={avatarStyle}/>

      <CardTitle style={boldStyle}
      title={task.description}
      />
      </div>
      <CardText style={subText}>
      <div>At: {time} &nbsp; {date} - Duration {task.duration}h</div>
      <div>Cost: {cost} VND - Location: {task.address}</div>
      </CardText>
      <div id="listOfTasker">
      {this.data.taskConfirmed.length > 0?
        <div>
        <CardHeader style={taskerStyle}
        title={choosedTasker.username}
        subtitle={choosedAt}
        avatar={choosedTasker.avatar}/>
        <div id="checkAccept">
        <span>Confirmed</span>
        </div>
        </div>:<span></span>
      }
      {lstTasker.map((Acceptedtasker) => {
        return [
          <div>
          <CardHeader style={taskerStyle}
          title={Acceptedtasker.tasker.username}
          subtitle={Acceptedtasker.acceptedAt}
          avatar={Acceptedtasker.tasker.avatar}/>
          <div id="checkAccept">
          <Checkbox id={Acceptedtasker.tasker.username}
          ref={Acceptedtasker.tasker._id}
          name="checkboxName1"
          value={Acceptedtasker.tasker._id}
          onCheck={this.onCheckClick.bind(Acceptedtasker.tasker._id)}/>
          </div>
          </div>
        ]
      })
    }
    </div>
    <div id="functionButton">
    <CardActions>
    <RaisedButton
    id="btnCancel"
    label="Cancel task"
    secondary={true}
    onClick={this.onCancelClick} />
    {this.data.taskConfirmed.length <= 0?
      <RaisedButton
      id="btnAccept"
      label="Accept"
      primary={true}
      onClick={this.onAcceptClick}/>:<div></div>
    }
    </CardActions>
    </div>
    </Card>
    </div>
    </div>
  );
}
});
