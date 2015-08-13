/**
* @Description: Home Page
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

HomePage = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onAskerClick(){
    React.render(<ListTask_Asker />, document.getElementById("container"));
  },

  onTaskerClick() {
    React.render(<ListTask_Tasker />,document.getElementById("container"));
  },

  onPostTask(){
    React.render(<PostTask />, document.getElementById("container"));
  },

  render() {
    let stylePostTask = {
      "text-align": "center",
      "padding": "40% 0 40% 0"
    };
    return (
      <div>
        <AppBar
          title="Click To Help"
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
            </div>
          } />
        <div style={stylePostTask} id="btnPostTask">
          <Avatar
            color="#fff"
            backgroundColor="#00bcd4"
            size={120}
            onClick={this.onPostTask}>
            +
          </Avatar>
        </div>
        <div className="button-secondary">
          <RaisedButton
            label="Login"
            secondary={true}
            fullWidth={true}
            onClick={this.onAskerClick} />
        </div>
        <div className="button-secondary">
          <RaisedButton
            label="Become a Tasker"
            primary={true}
            fullWidth={true}
            onClick={this.onTaskerClick}/>
        </div>
      </div>
    );
  }
});
