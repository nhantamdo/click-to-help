/**
* @Description: List Task of Asker Screen
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  Tabs,
  Tab,
  FloatingActionButton
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

  onPostTask(){
    React.render(<PostTask />, document.getElementById("container"));
  },

  render() {
    return (
      <div>
        <AskerAppBAr title="Ask List" onBack={this.onBack}/>
          <div className="main">
            <Tabs>
              <Tab label="Waiting">
                <TaskItem_Asker status={['accepted']} />
              </Tab>
              <Tab label="Confirmed">
                <TaskItem_Asker status={['confirmed']} />
              </Tab>
            </Tabs>
          </div>
          <FloatingActionButton secondary={true} className="floatingPoint" onClick={this.onPostTask}>
            <b>+</b>
          </FloatingActionButton>
      </div>
    );
  }
});
