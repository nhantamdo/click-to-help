const {
  AppBar
} = mui;

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

 const ThemeManager = new mui.Styles.ThemeManager();
 ThemeManager.setPalette(customPalette);

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
