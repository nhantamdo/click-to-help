/**
* @Description: Activation Screen
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  TextField,
  RaisedButton,
  Dialog,
  Checkbox
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

Activation_Tasker = React.createClass({
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
      activationCode: "",
      password: "",
      passwordConfirm: ""
    };
  },
  propTypes: {
  },

  onBlurActivationCode(){
    var mes = "";
    var code = this.refs.txtActivationCode.getValue().trim();
    if(code.length == 0){
      mes = "This field is required";
    }
    else {
      mes = "";
    }
    this.setState({
      activationCode: mes
    });
  },

  onBlurPassword(){
    var mes = "";
    var password = this.refs.txtPassword.getValue().trim();
    if(password.length == 0){
      mes = "This field is required";
    }
    else {
      mes = "";
    }
    this.setState({
      password: mes
    });
  },

  onBlurPasswordConfirm(){
    var mes = "";
    var password = this.refs.txtPassword.getValue().trim();
    var passwordConfirm = this.refs.txtPasswordConfirm.getValue().trim();
    if(passwordConfirm.length == 0){
      mes = "This field is required";
    }
    else {
      if(password != passwordConfirm){
        mes = "Password Confirm is incorrect";
      }
      else {
        mes = "";
      }
    }
    this.setState({
      passwordConfirm: mes
    });
  },

  onChangePasswordConfirm(){
    this.onBlurPasswordConfirm();
  },

  onNext(){
    var messageCode = "", messagePass = "", messagePassConfirm;
    var code = this.refs.txtActivationCode.getValue().trim();
    var password = this.refs.txtPassword.getValue().trim();
    var passwordConfirm = this.refs.txtPasswordConfirm.getValue().trim();
    if(code.length == 0 || password.length == 0 || passwordConfirm.length == 0){
      if(code.length == 0){
        messageCode = "This field is required";
      }
      else {
        messageCode = "";
      }

      if(password.length == 0){
        messagePass = "This field is required";
      }
      else {
        messagePass = "";
      }

      if(passwordConfirm.length == 0){
        messagePassConfirm = "This field is required";
      }
      else {
        messagePassConfirm = "";
      }
      this.setState({
        activationCode: messageCode,
        password: messagePass,
        passwordConfirm: messagePassConfirm
      });
    }
    else {
      this.setState({
        activationCode: "",
        password: "",
        passwordConfirm: ""
      }, function(){
        var codeGenerate = Number(this.props.code);
        if(Number(code) === codeGenerate){

        }
        else {
          this.refs.dialogMessage.show();
        }
      });
    }
  },

  onBack(){
    FlowRouter.go('/sign-up');
  },

  onCheckShowPassword(e,checked){
    if(checked){
      $("#txtPassword").attr('type','text');
      $("#txtPasswordConfirm").attr('type','text');
    }
    else {
      $("#txtPassword").attr('type','password');
      $("#txtPasswordConfirm").attr('type','password');
    }
  },

  render() {
    let styleMessage = {
      textAlign: 'center'
    };
    let standardActions = [
      { text: 'OK' }
    ];
    return (
      <div>
        <AppBar
          title="Activation"
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
            </div>
          } />
        <br/>
        <div className="padding-left-right">
          <div style={styleMessage}>
            Please enter activation code to active your account
            <div>
              <strong>{this.props.name} - {this.props.phone}</strong>
            </div>
          </div>
          <TextField
            ref="txtActivationCode"
            floatingLabelText="Activation Code (test: 12345)"
            errorText={this.state.activationCode}
            onBlur={this.onBlurActivationCode}
            fullWidth={true} />
          <TextField
            id="txtPassword"
            ref="txtPassword"
            floatingLabelText="Password"
            errorText={this.state.password}
            type="password"
            onBlur={this.onBlurPassword}
            fullWidth={true} />
          <TextField
            id="txtPasswordConfirm"
            ref="txtPasswordConfirm"
            floatingLabelText="Password Confirm"
            errorText={this.state.passwordConfirm}
            type="password"
            onBlur={this.onBlurPasswordConfirm}
            onChange={this.onChangePasswordConfirm}
            fullWidth={true} />
          <Checkbox
            label="Show password"
            onCheck={this.onCheckShowPassword}/>
          <br/><br/>
          <div className="backButton">
            <RaisedButton
              label="Back"
              primary={true}
              fullWidth={true}
              onClick={this.onBack} />
          </div>
          <div className="nextButton">
            <RaisedButton
              label="Active"
              secondary={true}
              fullWidth={true}
              onClick={this.onNext} />
          </div>
        </div>
        <Dialog
          ref="dialogMessage"
          actions={standardActions}>
          Activation Code not correct, Please check message on your phone.
        </Dialog>
      </div>
      );
    }
  });
