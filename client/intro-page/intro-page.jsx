/**
* @Description: Intro Page
* @Author: linhnh
*/

const{
  AppBar,
  Avatar,
  RaisedButton,
  IconButton
} = mui;

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);

IntroPage = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onLeftIconButtonTouchTap(){
    FlowRouter.go('/ask-list');
  },

  onPostATask(){
    FlowRouter.go('/list-service');
  },

  onLoginClick(){

  },

  onTaskerClick() {

  },

  render() {
    let stylePostTask = {
      "textAlign": "center",
      "padding": "40% 0 40% 0"
    };
    let styleContent = {
      "paddingTop": "45%"
    };
    return (
      <div className="padding-bottom">
        <AppBar
          title="Click To Help"
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
            </div>
          } />
        <div style={styleContent}>
          <div className="button-secondary">
            <RaisedButton
              id="btnPostTask"
              label="Post a task"
              secondary={true}
              fullWidth={true}
              onClick={this.onPostATask} />
          </div>
          <div className="button-secondary">
            <RaisedButton
              label="Become a Tasker"
              primary={true}
              fullWidth={true}
              onClick={this.onTaskerClick}/>
          </div>
          <div className="button-secondary">
            <RaisedButton
              id="btnLogin"
              label="Login"
              fullWidth={true}
              onClick={this.onLoginClick} />
          </div>
        </div>
      </div>
    );
  }
});
