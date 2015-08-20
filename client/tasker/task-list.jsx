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
  mixins: [ReactMeteorData],
  getMeteorData() {
    var taskerHandle = Meteor.subscribe("tasker");
    var taskStatusHandle = Meteor.subscribe("taskStatus");
    return {
      taskerLoading: !taskerHandle.ready(),
      taskStatusLoading: !taskStatusHandle.ready()
    }
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
    FlowRouter.go('/list-service');
  },

  onBack(){
    FlowRouter.go('/');
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
    console.log("begin load task list tasker");
    if(this.data.taskerLoading || this.data.taskStatusLoading){
      return (<div></div>);
    }
    return (
      <div>
        <TaskerAppBAr title="Task List" onBack={this.onBack}/>
          <div className="main">
            <div>
              <Tabs
                tabItemContainerStyle={tabStyle}
                inkBarStyle={inkStyle}
                contentContainerStyle={contentStyle}>
                <Tab label="Accepted" onActive={this.onActiveTab}>
                  <div id="taskListAccepted">
                    <TaskItem status={['accepted']} />
                  </div>
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
