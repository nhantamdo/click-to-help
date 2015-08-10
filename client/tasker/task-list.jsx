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

  onBack(){
    React.render(<HomePage />, document.getElementById("container"));
  },

  onActiveTab(tab){
    if(tab.props.tabIndex == 0){

    }
    else if(tab.props.tabIndex == 1){

    }
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
              <IconButton iconClassName="icon-back" onClick={this.onBack} />
            </div>
          } />
          <Tabs>
            <Tab label="Accepted" onActive={this.onActiveTab}>
              <ListItemTask />
            </Tab>
            <Tab label="Confirmed" onActive={this.onActiveTab}>

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

  formatMoney(num) {
      var p = num.toFixed(2).split(".");
      return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
          return  num + (i && !(i % 3) ? "," : "") + acc;
      }, "");
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

        let styleItem = {};
        styleItem["height"] = "50px";

        let cost = task.cost;
        cost = this.formatMoney(Number(cost));
        return [
          <ListItem
            key={task._id}
            primaryText={ task.description }
            secondaryText={
              <p style={styleItem}>
                <span>{time} &nbsp; {date} - làm trong {task.duration}h</span><br/>
                {cost} VND<br/>
                {task.address}
              </p>
            }
            leftAvatar={ <Avatar src={service.icon}/> }/>,
          <ListDivider/>
        ]
      })
    }</List>
  }
});
