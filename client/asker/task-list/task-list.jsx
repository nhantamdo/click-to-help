/**
* @Description: List Task of Asker Screen
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  Tabs,
  Tab
} = mui;

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);

ListTask_Asker = React.createClass({
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
      viewNotification: false
    };
  },
  propTypes: {
  },

  onBack(){
    React.render(<HomePage />, document.getElementById("container"));
  },

  render() {
    return (
      <div>
        <AppBar
          className="appbar"
          title="Danh sách công việc"
          iconElementRight={
            <div>
              <IconButton id="btnNotification"
                iconClassName="icon-notification"
                onClick={this.onClickNotification}/>
              <IconButton iconClassName="icon-help" />
              <IconButton iconClassName="icon-back" onClick={this.onBack} />
            </div>
          } />
          <div className="tabStrip">
            <Tabs>
              <Tab label="Accepted">
                <TaskItem_Asker status={['accepted']} />
              </Tab>
              <Tab label="Confirmed">
                <TaskItem_Asker status={['confirmed']} />
              </Tab>
            </Tabs>
          </div>
      </div>
    );
  }
});
