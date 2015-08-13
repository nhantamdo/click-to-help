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
  Avatar
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

  onBack(){
    React.render(<HomePage />, document.getElementById("container"));
  },

  onActiveTab(tab){
    if(tab.props.tabIndex == 0){

    }
    else if(tab.props.tabIndex == 1){

    }
  },

  onClickNotification(e) {
    this.setState({
      viewNotification: !this.state.viewNotification
    });
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
        <div className="appbar">
          <AppBar
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
          </div>
          <div className="main">
            {this.state.viewNotification? <ListTaskNotification />:""}
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
        </div>
      );
    }
  });
