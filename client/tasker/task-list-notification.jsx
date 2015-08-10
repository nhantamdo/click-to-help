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
  Avatar
} = mui;

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);
menuItems = [
{ route: 'get-started', text: 'Get Started' },
{ route: 'customization', text: 'Customization' },
{ route: 'components', text: 'Components' },
{ type: MenuItem.Types.SUBHEADER, text: 'Resources' },
{
  type: MenuItem.Types.LINK,
  payload: 'https://github.com/callemall/material-ui',
  text: 'GitHub'
},
{
  text: 'Disabled',
  disabled: true
},
{
  type: MenuItem.Types.LINK,
  payload: 'https://www.google.com',
  text: 'Disabled Link',
  disabled: true
},
];


ListTaskNotification = React.createClass({
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

  onClickNotification(e) {
    console.log(e);
  },

  render() {
    return (
      <div>
        <AppBar
          title="Danh sách công việc"
          iconElementRight={
            <div>
              <IconButton
                iconClassName="icon-notification"
                onFocus={this.onClickNotification}/>
              <IconButton iconClassName="icon-help" />
              <IconButton iconClassName="icon-back" />
            </div>
          } />
          <div id="main">
            <CardHeader
              title="Title"
              subtitle="Subtitle"
              avatar={<Avatar>A</Avatar>}/>
          </div>
        </div>
      );
    }
  });
