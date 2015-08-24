/**
* @Description: Login Page
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  TextField,
  RaisedButton,
  Checkbox
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

Login = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onBack(){
    FlowRouter.go('/');
  },

  render() {
    let styleSignUp = {
      position: "fixed",
      width: "90%",
      bottom: "4%"
    };
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
            floatingLabelText="Phone"
            fullWidth={true} />
          <TextField
            floatingLabelText="Password"
            type="password"
            fullWidth={true} />
          <Checkbox
            label="Show password"/>
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
      </div>
    );
  }
});
