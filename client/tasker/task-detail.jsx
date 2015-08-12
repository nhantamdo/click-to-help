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
    this.setState({
      viewNotification: !this.state.viewNotification
    });
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
      <CardText style={style}>Have 3 tasker accepted</CardText>
      <CardActions>
      <RaisedButton
      id="btnSkip"
      label="Skip"
      secondary={true}
      onClick={this.onSkipClick} />
      <RaisedButton
      id="btnGetIt"
      label="Accept"
      primary={true}
      onClick={this.onGetItClick}/>
      </CardActions>
      </Card>

      </div>
    );
  }
});
