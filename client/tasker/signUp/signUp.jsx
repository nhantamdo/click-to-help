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
    FlowRouter.go('/login');
  },
  onChangePhone(){
    if(this.refs.txtMobilePhone.getValue().length < 10){
      console.log(this.refs.txtMobilePhone.getValue().length);
      this.refs.txtMobilePhone.errorText="Mobile phone must be 10 or 11 charactors";
    }
  },
  onCapture(){
    //Capture avatar picture
  },



  render() {
    let avataStyle = {display:"inherit"};
    return (
      <div>
        <AppBar
          title="SIGN UP"
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
              <IconButton iconClassName="icon-back" onClick={this.onBack} />
            </div>
          } />
          <div className="main">

            <div>
              <Avatar className="itemCenter" src="avatars/avatarDefault.png" size={150} style={avataStyle} onClick={this.onCapture}/>
            </div>
            <div id="userInformation" className="padding-left-right" >
              <TextField fullWidth={true}
                id="txtYourName"
                ref="txtYourName"
                hintText="Your name"
                />
              <TextField fullWidth={true}
                id="txtMobilePhone"
                ref="txtMobilePhone"
                hintText="Mobile phone"
                onChange={this.onChangePhone}/>
              <div className="padding-top-bottom">
                <RaisedButton fullWidth={true} label="Next >" primary={true} />
              </div>
              <div className="backButton">
                <RaisedButton secondary={true} label="Facebook" fullWidth={true}/>
              </div>
              <div className="nextButton">
                <RaisedButton primary={true} label="Google" fullWidth={true}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
