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
      numNotifi: this.count()
    };
  },
  propTypes: {
    onBack: React.PropTypes.func
  },
  count() {
    return 0;
  },

  onClickNotification(e) {
    this.setState({
      viewNotification: !this.state.viewNotification,
      numNotifi: 0

    });
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
                <span className="numNotification">{this.state.numNotifi}</span>
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
