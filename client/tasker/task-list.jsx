/**
* @Description: List Task of Tasker Screen
* @Author: linhnh
*/

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
  Overlay
} = mui;

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);

ListTask_Tasker = React.createClass({
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

  onActiveTab(tab){
    if(tab.props.tabIndex == 0){

    }
    else if(tab.props.tabIndex == 1){

    }
  },

  onClickNotification(e) {
    console.log("click notification");
    this.setState({
      viewNotification: !this.state.viewNotification
    });

  },

  onPostTask(){
    React.render(<PostTask />, document.getElementById("container"));
  },

  onBack(){
    React.render(<HomePage />, document.getElementById("container"));
  },

  render() {
    let tabStyle = {
      position: 'fixed',
      zIndex: '7'
    };
    let inkStyle = {
      position: 'fixed',
      zIndex:'8',
      top: '112px',
    };
    let contentStyle ={
      padding: "40px 0px 0px 0px",
    };
    return (
      <div>
        <TaskerAppBAr onBack={this.onBack}/>
          <div className="main">
            <div>
              <Tabs
                tabItemContainerStyle={tabStyle}
                inkBarStyle={inkStyle}
                contentContainerStyle={contentStyle}>
                <Tab label="Accepted" onActive={this.onActiveTab}>
                  <TaskItem status={['accepted']} />
                </Tab>
                <Tab label="Confirmed" onActive={this.onActiveTab}>
                  <TaskItem status={['confirmed']} />
                </Tab>
              </Tabs>
            </div>
          </div>
          <FloatingActionButton secondary={true} className="floatingPoint" onClick={this.onPostTask}>
            <b>+</b>
          </FloatingActionButton>
        </div>
      );
    }
  });
