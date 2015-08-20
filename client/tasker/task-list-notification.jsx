/**
* @Description: Tasker Notification
* @Author: truongtk
*/

const{
  AppBar,
  IconButton,
  MenuItem,
  LeftNav,
  CardHeader,
  Avatar,
  Card,
  Paper,
  Overlay
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

ListTaskNotification = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },

  getInitialState () {
    return {
    };
  },
  propTypes: {
  },
  //
  // onClickOutside() {
  // },

  render() {
    return (
      <Paper zDepth={1} className="notification">
        <div id="notification">
          <TaskItem subheader="notification" status={['read','unread','new']}/>
        </div>
      </Paper>
    );
  }
});
