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
  CardHeader
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
      taskStatus:TaskStatus.find({taskId:this.props.taskKey, status:"accepted"}).fetch(),
      taskStatusConfirm:TaskStatus.find({taskId:this.props.taskKey, status:"confirmed"}).fetch()
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
    var numberAccepted = this.data.taskStatus.length;
    console.log(task);
    console.log(numberAccepted);
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
        <CardHeader style={boldStyle}
        title={task.description}
        avatar={service.icon}>
        </CardHeader>
        <br/>
        <CardText>At: {time} &nbsp; {date} - Duration {task.duration}h</CardText>
        <CardText>Cost: {cost} VND</CardText>
        <CardText>Location: {task.address}</CardText>
        <CardText>Contact: {task.phone} - {task.email}</CardText>
        {numberConfirmed==0?<CardText style={style}>{numberAccepted==0? "No one accepted":numberAccepted==1? "Have 1 tasker accepted":"Have ".concat(numberAccepted).concat(" taskers accepted")}</CardText>:<CardText style={style}>This task is comfirmed</CardText>}
        <CardActions>
        <RaisedButton
        id="btnSkip"
        label="Skip"
        secondary={true}
        onClick={this.onSkipClick} />
        {numberConfirmed==0?
          <RaisedButton
          id="btnGetIt"
          label="Accept"
          primary={true}
          onClick={this.onGetItClick}/>:<span></span>
        }

        </CardActions>
        </Card>
      }

      </div>
    );
  }
});
