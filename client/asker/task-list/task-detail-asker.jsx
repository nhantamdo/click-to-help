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
  Avatar,
  Snackbar,
  Checkbox
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPaletteAsker);

TaskDetailAsker = React.createClass({
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
    React.render(<ListTask_Tasker/>, document.getElementById("container"));
  },

  onBackClick(){
    React.render(<ListTask_Tasker/>, document.getElementById("container"));
  },

  onSkipClick(){
    React.render(<ListTask_Tasker/>, document.getElementById("container"));
  },

  onAcceptClick(){


  },
  _handleAction() {
    //We can add more code to this function, but for now we'll just include an alert.
    React.render(<ListTask_Tasker/>, document.getElementById("container"));
  },

  onClickNotification(e) {
    this.setState({
      viewNotification: !this.state.viewNotification
    });
  },
  componentDidMount: function() {
    //this.refs.txtDescription.focus();

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
    var lstTasker = [];
    var task  = this.data.tasks[0];
    TaskStatus.find({taskId:task._id, status:"accepted", taskerId:{$ne:null}})
    .forEach(function (taskStatus){
      var Acceptedtasker = Tasker.find({_id:taskStatus.taskerId}).fetch()[0];
      lstTasker.push(Acceptedtasker);
    });



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
      <AppBar title="Confirming"
      iconElementRight={
        <div>
        <IconButton iconClassName="icon-notification"
        onClick={this.onClickNotification}/>
        <IconButton iconClassName="icon-help" />
        <IconButton iconClassName="icon-back" onClick={this.onBack} />
        </div>
      } />
      {this.state.viewNotification? <ListTaskNotification />:{}}
      </div>
      <div className="main">
      <Snackbar ref="thissnackbar"
      message="Accept succesful"
      action="Back to Tasks list"
      autoHideDuration={0}
      onActionTouchTap={this._handleAction}/>
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
      {lstTasker.map((Acceptedtasker) => {
        return [
          <div>
          <CardHeader style={taskerStyle}
          title={Acceptedtasker.username}
          subtitle="Accepted at ****"
          avatar={Acceptedtasker.avatar}/>
          <div id="checkAccept">
          <Checkbox
          name="checkboxName1"
          value="checkboxValue1"/>
          </div>
          </div>
        ]
      })
    }
    <div id="functionButton">
      <CardActions>
      <RaisedButton
      id="btnCancel"
      label="Cancel task"
      secondary={true}
      onClick={this.onCancelClick} />
      <RaisedButton
      id="btnAccept"
      label="Accept"
      primary={true}
      onClick={this.onAcceptClick}/>
      </CardActions>
    </div>
    </Card>
    </div>
    </div>
  );
}
});
