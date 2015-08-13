/**
* @Description: Home Page
* @Author: linhnh
*/

const{
  AppBar,
  RaisedButton,
  IconButton,
  FloatingActionButton
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
    return (
      <div>
        <AppBar
          title="Click To Help"
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
            </div>
          } />
        <br/>
        <div className="button-secondary">
          <RaisedButton
            id="btnPostTask"
            label="I'm an Asker"
            secondary={true}
            fullWidth={true}
            onClick={this.onAskerClick} />
        </div>
        <div className="button-secondary">
          <RaisedButton
            id="btnTasker"
            label="I'm a Tasker"
            primary={true}
            fullWidth={true}
            onClick={this.onTaskerClick}/>
        </div>
        <FloatingActionButton secondary={true} className="floatingPoint" onClick={this.onPostTask}>
          <b>+</b>
        </FloatingActionButton>
      </div>
    );
  }
});
