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
  RaisedButton
} = mui;


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
      tasks: Task.findOne({})
    }
  },

  getDefaultService: function(){
    var task1 = this.data.tasks;
    //var service = Service.findOne({id: task1.serviceId});
    return "Don dep nha";//service.text;
  },

  onBack(){
    React.render(<HomePage />, document.getElementById("container"));
  },



  render() {
    return (
      <div>
      <AppBar title="dhsgvdhsgvd"/>
      </div>
    );
  }
});
