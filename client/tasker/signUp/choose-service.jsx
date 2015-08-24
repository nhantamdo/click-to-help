/**
* Discription: List of service
* Author: truongtk
*/

const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

ChooseService = React.createClass({
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
      selectedServiceId: []
    };
  },
  propTypes: {
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe("service");
    return {
      services: Service.find().fetch()
    }
  },

  selectService(serviceId) {
    if (this.state.selectedServiceId.indexOf(serviceId)!= -1) {
      this.state.selectedServiceId.splice(this.state.selectedServiceId.indexOf(serviceId), 1)
    } else {
      this.state.selectedServiceId.push(serviceId)
    }
    this.setState({
      selectedServiceId: this.state.selectedServiceId
    });
  },

  renderService() {
    return <List>{
        this.data.services.map((service) => {
          let style = {};
          if (this.state.selectedServiceId.indexOf(service.id) != -1) {
            style["color"] = "#00bcd4";
          }

          return [
          <ListItem
            id="itemService"
            key={ service.id }
            primaryText={ service.text }
            onClick={ this.selectService.bind(this, service.id) }
            leftAvatar={ <Avatar src={service.icon}/> }
            style={style}/>,
          <ListDivider/>
          ]
        })
      }</List>
    },

    render() {
      let avataStyle = {display:"inherit"};
      return (
        <div>
          <TaskerAppBAr title="Can Do" onBack={this.onBack}/>
          <div className="main">
            {this.renderService()}
          </div>
        </div>
      );
    }
  });
