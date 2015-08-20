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
      numNotifi: this.count()
    };
  },
  propTypes: {
    onBack: React.PropTypes.func
  },
  count() {
    var tasker = Tasker.find({email:"toanpp@twin.vn"}).fetch()[0];
    return TaskStatus.find({taskerId:tasker._id , status:"new"}).fetch().length;
  },

  onClickNotification(e) {
    this.setState({
      viewNotification: !this.state.viewNotification,
      numNotifi: 0
    });
    Meteor.call("changeToUnread",Tasker.find({email:"toanpp@twin.vn"}).fetch()[0]);
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
                <span className="numNotification">{this.state.numNotifi}</span>
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
