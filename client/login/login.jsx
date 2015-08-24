/**
* @Description: Login Page
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  TextField,
  RaisedButton,
  Checkbox,
  Dialog
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

Login = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe("user");
    Meteor.subscribe("userChannel");
    return {
      users: User.find().fetch(),
      userChannel: UserChannel.find().fetch()
    }
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState () {
    return {
      phoneValid: "",
      passwordValid: ""
    };
  },
  propTypes: {
  },

  onBack(){
    FlowRouter.go('/');
  },

  onBlurPhone(){
    var phone = this.refs.phoneNumber.getValue().trim();
    if(phone.length == 0){
      this.setState({
        phoneValid : "This field is required",
      });
    }
  },

  onChangePhone(e) {
    var phone = this.refs.phoneNumber.getValue().trim();
    if (phone != "") {
      if (isNaN(parseInt(phone))) {
        phoneValid = "The phone is incorrect";
      }
      if (phone.length != 10 && phone.length != 11) {
        phoneValid = "The phone is incorrect";
      }
      else {
        phoneValid = "";
      }
    }
    else {
      phoneValid = "This field is required";
    }
    this.setState({
      phoneValid : phoneValid,
    });
  },

  onBlurPassword(){
    var password = this.refs.password.getValue().trim();
    if(password.length == 0){
      this.setState({
        passwordValid: "This field is required"
      });
    }
  },

  onCheckShowPassword(e,checked){
    if(checked){
      $("#txtPassword").attr('type','text');
    }
    else {
      $("#txtPassword").attr('type','password');
    }
  },

  onLoginClick(){
    var phoneValid = "", passwordValid = "";
    var phone = this.refs.phoneNumber.getValue().trim();
    var password = this.refs.password.getValue().trim();
    if(phone.length == 0 || password.length == 0){
      if(phone.length == 0){
        phoneValid = "This field is required";
      }
      else {
        if (isNaN(parseInt(phone))) {
          phoneValid = "The phone is incorrect";
        }
        if (phone.length != 10 && phone.length != 11) {
          phoneValid = "The phone is incorrect";
        }
        else {
          phoneValid = "";
        }
      }

      if(password.length == 0){
        passwordValid = "This field is required";
      }
      else {
        passwordValid = "";
      }
      this.setState({
        phoneValid : phoneValid,
        passwordValid: passwordValid
      });
    }
    else {
      if (isNaN(parseInt(phone))) {
        phoneValid = "The phone is incorrect";
      }
      if (phone.length != 10 && phone.length != 11) {
        phoneValid = "The phone is incorrect";
      }
      else {
        phoneValid = "";
      }
      this.setState({
        phoneValid : phoneValid,
        passwordValid: passwordValid
      }, function(){
        if(phoneValid.length == 0 && passwordValid.length == 0){
          var hasUser = false;
          this.data.users.forEach(function(item){
            if(item.phone == phone && item.password == password){
              hasUser = true;
              return;
            }
          });
          if(hasUser){  // Login success
            var hasChannel = false;
            this.data.userChannel.forEach(function(item){
              if(item.userId == phone){
                hasChannel = true;
                return;
              }
            });            
            if(hasChannel){ // Tasker
              FlowRouter.go('/list-task-tasker');
            }
            else {
              FlowRouter.go('/ask-list');
            }
          }
          else {  // Login failed
            this.refs.dlMessage.show();
          }
        }
      });
    }
  },

  render() {
    let styleSignUp = {
      position: "fixed",
      width: "90%",
      bottom: "4%"
    };
    let standardActions = [
      { text: 'OK' }
    ];
    return (
      <div className="padding-bottom">
        <AppBar
          title="Login"
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
              <IconButton iconClassName="icon-back" onClick={this.onBack} />
            </div>
          } />
        <div className="padding-left-right">
          <TextField
            ref="phoneNumber"
            floatingLabelText="Phone"
            errorText={this.state.phoneValid}
            onChange={this.onChangePhone}
            onBlur={this.onBlurPhone}
            fullWidth={true} />
          <TextField
            id="txtPassword"
            ref="password"
            floatingLabelText="Password"
            errorText={this.state.passwordValid}
            type="password"
            onBlur={this.onBlurPassword}
            fullWidth={true} />
          <Checkbox
            label="Show password"
            onCheck={this.onCheckShowPassword}/>
        </div><br/>
        <div className="button-secondary">
          <RaisedButton
            id="btnLogin"
            label="Login"
            fullWidth={true}
            onClick={this.onLoginClick} />
        </div><br/>
        <div className="button-secondary">
          <a href="/forgot-password">Forgot password</a>
        </div>
        <div className="padding-left-right" style={styleSignUp}>
          <RaisedButton
            label="Sign up"
            primary={true}
            fullWidth={true}/>
        </div>
        <Dialog
          ref="dlMessage"
          actions={standardActions}
          modal={true}>
          Phone or Password is incorrect
        </Dialog>
      </div>
    );
  }
});
