/**
* @Description: add contact Info
* @Author: truongtk
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

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setPalette(customPalette);

ContactInfo = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },


  getInitialState: function () {
    return {
    };
  },
  propTypes: {
  },

  render() {
    return (
      <div className="button-secondary">
        <div>
          <TextField ref="address"
            floatingLabelText="Address"
            fullWidth={true}
            id="Address"/>
        </div>
        <div>
          <TextField ref="phoneNumber"
            floatingLabelText="Phone number"
            fullWidth={true}
            id="phoneNumber"/>
        </div>
        <div>
          <TextField ref="name"
            floatingLabelText="Your fullname"
            defaultValue={this.props.taskerEmail}
            fullWidth={true}
            id="name"/>
        </div>
        <div>
          <TextField ref="name"
            floatingLabelText="Your email (optional)"
            fullWidth={true}
            id="email"/>
        </div>
        <div className="button-padding-top">
        <RaisedButton
          id="Post"
          label="Post Task"
          secondary={true}
          fullWidth={true}
          onClick={this.clickToChooseSkill}/>
      </div>
      </div>
    );
  }
});
