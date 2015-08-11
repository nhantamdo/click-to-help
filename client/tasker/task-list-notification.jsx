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

  render() {
    return (
      <div id="notification">
        <p>Notification</p>
        <TaskItem status={['read','unread']}/>
      </div>
    );
  }
});
