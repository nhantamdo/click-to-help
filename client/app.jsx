const {
  AppBar
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render() {
    return (
    <PostTask />
    )
  }
});
