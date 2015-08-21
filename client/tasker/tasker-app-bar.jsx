/**
* @Description: Tasker AppBar
* @Author: truongtk
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

TaskerAppBAr = React.createClass({
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
      viewNotification: false,
    };
  },
  propTypes: {
    onBack: React.PropTypes.func
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    var taskerHandle = Meteor.subscribe("tasker");
    var taskStatusHandle = Meteor.subscribe("taskStatus");
    var clickStatusHandle = Meteor.subscribe("TaskerClickQuery")
    if (taskerHandle.ready() && taskStatusHandle.ready() && clickStatusHandle.ready()) {
      // transfer TaskerId
      let taskerId = Tasker.find({email:"linhnh@twin.vn"}).fetch()[0]._id;
      var lastClick = ClickStatus.find({type:1,userId:taskerId}).fetch()[0].clickAt;
      var notification = TaskStatus.find({taskerId:taskerId , updatedAt:{$gte : lastClick} , status:'unread'}).fetch();
      return {
        notifCount: notification.length
      }
    }
    return {
    };
  },

  onClickNotification(e) {
    if (this.data.notifCount !== undefined) {
      if (!this.state.viewNotification) Meteor.call('TaskerUpdateClick',Tasker.find({email:"linhnh@twin.vn"}).fetch()[0]._id);
      this.setState({
        viewNotification: !this.state.viewNotification,
      });
    }
  },

  onCloseNotification() {
    this.setState({
      viewNotification: false,
    });
  },

  render() {
    return (
      <div>
        <div className="appbar">
          <AppBar
            title={this.props.title}
            iconElementRight={
              <div>
                <span id="btnNotification">
                  <IconButton
                    iconClassName="icon-notification"
                    onClick={this.onClickNotification}/>
                </span>
                <span className="numNotification">{this.data.notifCount? this.data.notifCount:0}</span>
                <IconButton iconClassName="icon-help" />
                <IconButton iconClassName="icon-back"
                  onClick={this.props.onBack} />
              </div>
            } />
            {this.state.viewNotification? <ListTaskNotification/>:{}}
          </div>
          <Overlay
            ref="overlay"
            show={this.state.viewNotification}
            transitionEnabled={true}
            onTouchTap={this.onCloseNotification}/>
        </div>
      );
    }
  });
