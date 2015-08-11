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
  FlatButton
} = mui;
Meteor.subscribe("task");
const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);

TaskDetail = React.createClass({
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
    return {
      tasks: Task.find({_id:"QLGjMyMGRjBsFPTsu"}).fetch()
    }
  },

  onBack(){
    React.render(<HomePage />, document.getElementById("container"));
  },

  render() {
    console.log(this.data.tasks);
    var service = Service.findOne({_id:this.data.tasks.serviceId});
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
      <CardTitle title={service.text} subtitle={this.data.tasks.description}/>
      <CardActions>
      <FlatButton label="Action1"/>
      <FlatButton label="Action2"/>
      </CardActions>

      </div>
    );
  }
});
