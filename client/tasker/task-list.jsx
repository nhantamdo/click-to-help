/**
* @Description: List Task of Tasker Screen
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
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
    };
  },
  propTypes: {
  },

  render() {
    return (
      <div>
        <AppBar
          title="Danh sách công việc"
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-notification" />
              <IconButton iconClassName="icon-help" />
              <IconButton iconClassName="icon-back" />
            </div>
          } />
      </div>
    );
  }
});
