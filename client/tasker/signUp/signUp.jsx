//Description: This file define sign up screen. Navigate from Login screen.
//Author: toanpp.

const{
  AppBar,
  IconButton,
  Tabs,
  Tab,
  List,
  ListItem,
  ListDivider,
  Avatar,
  FloatingActionButton,
  Overlay,
  TextField,
  RaisedButton,
  Paper,
  FontIcon
} = mui;

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);

SignUp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState () {
    return {
    };
  },
  propTypes: {
  },

  onActiveTab(tab){
    if(tab.props.tabIndex == 0){

    }
    else if(tab.props.tabIndex == 1){

    }
  },


  onBack(){
    React.render(<Login />, document.getElementById("container"));
  },

  render() {
    let avataStyle = {display:"inherit"};
    return (
      <div>
      <TaskerAppBAr title="Task List" onBack={this.onBack}/>
      <div className="main">
      <div>
      <Avatar className="itemCenter" src="avatars/avatarDefault.png" size={150} style={avataStyle}/>
      </div>
      <div id="userInformation" className="padding-left-right" >
      <TextField fullWidth={true}
      id="txtYourName"
      hintText="Your name" />
      <TextField fullWidth={true}
      id="txtMobilePhone"
      hintText="Mobile phone" />
      <div className="padding-top">
      <RaisedButton fullWidth={true} label="Next >" primary={true} />
      </div>
      <div className="itemCenter">
      <RaisedButton secondary={true} label="Facebook"/>
      <RaisedButton primary={true} label="Google"/>
      </div>
      </div>
      </div>
      </div>
    );
  }
});
