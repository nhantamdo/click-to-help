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

AskerAppBAr = React.createClass({
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
    var taskStatusHandle = Meteor.subscribe("taskStatus");
    var clickStatusHandle = Meteor.subscribe("askerClickQuery","0123456789")
    if (taskStatusHandle.ready() && clickStatusHandle.ready()) {
      var lastClick = ClickStatus.find().fetch()[0].clickAt;
      var notification = TaskStatus.find({updatedAt:{$gte : lastClick}}).fetch();
      return {
        notifCount: notification.length
      }
    }
    return {
    };
  },

  onClickNotification(e) {
    if (this.data.notifCount !== undefined) {
      if (!this.state.viewNotification) Meteor.call('askerUpdateClick',"0123456789");
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
                <IconButton id="btnNotification"
                  iconClassName="icon-notification"
                  onClick={this.onClickNotification}/>
                <span className="numNotification">{this.data.notifCount? this.data.notifCount:0}</span>
                <IconButton iconClassName="icon-help" />
                <IconButton iconClassName="icon-back"
                  onClick={this.props.onBack} />
              </div>
            } />
            {this.state.viewNotification? <ListAskerNotification/>:{}}
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
