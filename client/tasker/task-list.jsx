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
            <ListItemTask />
          </Tab>
          <Tab label="Confirmed" >

          </Tab>
        </Tabs>
      </div>
    );
  }
});

ListItemTask = React.createClass({
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
        var service = Service.findOne({id: task.serviceId});
        var h = task.time.getHours();
        h = h < 10 ? "0" + h : h;
        var mm = task.time.getMinutes();
        mm = mm < 10 ? "0" + mm : mm;
        var time = h + ":" + mm;

        var d = task.date.getDate();
        d = d < 10 ? "0" + d : d;
        var m = task.date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var y = task.date.getFullYear();
        var date = d + "/" + m + "/" + y;
        return [
          <ListItem
            key={task._id}
            primaryText={ task.description }
            secondaryText={
              <p>
                <span>{time} &nbsp; {date} - {task.duration}h</span><br/>
                <span>{task.cost} VND - {task.address}</span><br/>
              </p>
            }
            leftAvatar={ <Avatar src={service.icon}/> }/>,
          <ListDivider/>
        ]
      })
    }</List>
  }
});
