/**
* @Description: Activation Screen
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  TextField,
  RaisedButton,
  Dialog
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

var activationCodeGenerate = 1234;

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
      password: ""
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

  onNext(){
    var messageCode = "", messagePass = "";
    var code = this.refs.txtActivationCode.getValue().trim();
    var password = this.refs.txtPassword.getValue().trim();
    if(code.length == 0 || password.length == 0){
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
      this.setState({
        activationCode: messageCode,
        password: messagePass
      });
    }
    else {
      this.setState({
        activationCode: false,
        password: false
      }, function(){
        if(Number(code) === activationCodeGenerate){
          
        }
        else {
          this.refs.dialogMessage.show();
        }
      });
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
              <strong>Nguyễn Hàn Linh - 0903727390</strong>
            </div>
          </div>
          <TextField
            ref="txtActivationCode"
            floatingLabelText="Activation Code (test: 1234)"
            errorText={this.state.activationCode ? "This field is required" : ""}
            onBlur={this.onBlurActivationCode}
            fullWidth={true} />
          <TextField
            ref="txtPassword"
            floatingLabelText="Password"
            errorText={this.state.password ? "This field is required" : ""}
            type="password"
            onBlur={this.onBlurPassword}
            fullWidth={true} />
          <br/><br/>
          <div className="button-secondary">
            <RaisedButton
              label="Next"
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
