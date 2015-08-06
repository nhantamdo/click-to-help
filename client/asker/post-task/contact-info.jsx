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
      <div>
        <div className="Address">
          <TextField ref="address"
            floatingLabelText="Address"
            hintText="Example: 105 Mai Thị Lựu Q.1 TP.HCM"
            fullWidth={true}
            id="Address"/>
        </div>
        <div className="PhoneNumber">
          <TextField ref="phoneNumber"
            floatingLabelText="Phone number"
            hintText="Example: 0123456789"
            fullWidth={true}
            id="phoneNumber"/>
        </div>
        <div className="Name">
          <TextField ref="name"
            floatingLabelText="Your fullname"
            hintText="Example: Trần Kim Trưởng"
            defaultValue={this.props.taskerEmail}
            fullWidth={true}
            id="name"/>
        </div>
        <div className="Name">
          <TextField ref="name"
            floatingLabelText="Your email (optional)"
            hintText="Example: truongtk@twin.vn"
            fullWidth={true}
            id="email"/>
        </div>
        <RaisedButton
          className="button-secondary"
          id="Post"
          label="Post Task"
          secondary={true}
          fullWidth={true}
          onClick={this.clickToChooseSkill}/>
      </div>
    );
  }
});
