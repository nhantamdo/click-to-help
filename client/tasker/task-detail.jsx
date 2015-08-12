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

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    var handle = Meteor.subscribe("task");
    return {
      taskLoading:! handle.ready(),
      tasks:Task.find({_id:this.props.taskKey}).fetch()
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
    React.render(<ListTaskNotification />, document.getElementById("container"));
  },

  render() {
    if (this.data.taskLoading) {
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
      <Card zDepth={0}>
      <CardHeader
      title={task.description}
      avatar={service.icon}>
      </CardHeader>
      <br/>

      <CardText>Lúc: {time} &nbsp; {date} - làm trong {task.duration}h</CardText>
      <CardText>Chi phí: {cost} VND</CardText>
      <CardText>Tại: {task.address}</CardText>
      <CardText>Liên hệ: {task.phone} - {task.email}</CardText>
      <CardActions>
      <RaisedButton
      id="btnSkip"
      label="Skip"
      secondary={true}
      onClick={this.onSkipClick} />
      <RaisedButton
      id="btnGetIt"
      label="Get it"
      primary={true}
      onClick={this.onGetItClick}/>
      </CardActions>
      </Card>

      </div>
    );
  }
});
