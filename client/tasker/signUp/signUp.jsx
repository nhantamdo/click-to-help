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
      phoneErrorText:"",
      nameErrorText:""
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
    FlowRouter.go('/');
  },
  onChangePhone(){
    if(this.refs.txtMobilePhone.getValue().length != 10 && this.refs.txtMobilePhone.getValue().length != 11){
      this.setState({
        phoneErrorText: "The phone number should contain 10 or 11 digits",
      });
    }
    else{
      this.setState({
        phoneErrorText: "",
      });
    }
  },
  onCapture(){
    //Capture avatar picture
  },
  toActivationPage(){
    var validate = true;
    if(this.refs.txtYourName.getValue().trim() == ""){
      this.setState({
        nameErrorText:"This field is required."
      });
      validate = false;
    }
    if(this.refs.txtMobilePhone.getValue().trim() == ""){
      this.setState({
        phoneErrorText:"This field is required."
      });
      validate = false;
    }
    if(validate == true){
      var param = {
        name: this.refs.txtYourName.getValue().trim(),
        phone:this.refs.txtMobilePhone.getValue().trim(),
        code:"12345"
      };
      FlowRouter.go('/activation', "", param);
    }

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
                floatingLabelText="Your name"
                errorText={this.state.nameErrorText}
                />
              <TextField fullWidth={true}
                id="txtMobilePhone"
                ref="txtMobilePhone"
                hintText="Mobile phone"
                floatingLabelText="Mobile phone"
                errorText={this.state.phoneErrorText}
                onChange={this.onChangePhone}/>
              <div className="padding-top-bottom">
                <RaisedButton id="btnToActivation" fullWidth={true} label="Next >" primary={true} onClick={this.toActivationPage}/>
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
