/**
* @Description: List Task of Tasker Screen
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  Tabs,
  Tab,
  List,
  ListItem,
  ListDivider,
  Avatar
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
          <Tabs>
          <Tab label="Accepted" >

          </Tab>
          <Tab label="Confirmed" >

          </Tab>
        </Tabs>
      </div>
    );
  }
});

ListService = React.createClass({
  getInitialState () {
    return {
    };
  },
  propTypes: {
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      tasks: Task.find().fetch()
    }
  },

  render() {
    return <List>{
      this.data.tasks.map((task) => {
        var service = Service.find({id: task.serviceId});
        return [
          <ListItem
            key={task._id}
            primaryText={ task.description }
            secondaryText={
              <p>
                <span>Brunch this weekend?</span><br/>
                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
              </p>
            }
            leftAvatar={ <Avatar src={service.icon}/> }/>,
          <ListDivider/>
        ]
      })
    }</List>
  }
});
