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

ListService = React.createClass({
  getInitialState () {
    return {
    };
  },
  propTypes: {
    selectedServiceId: React.PropTypes.string,
    onServiceSelected: React.PropTypes.func
  },

  selectService(ServiceId) {
    this.props.onServiceSelected(ServiceId);
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe("service");
    return {
      services: Service.find().fetch()
    }
  },

  selectService(ServiceId, ServiceText) {
    this.props.onServiceSelected(ServiceId, ServiceText);
  },

  render() {
    return <List subheader="Service List">{
      this.data.services.map((service) => {
        let style = {};
        if (this.props.selectedServiceId.indexOf(service.id) != -1) {
          style["color"] = "#ff6666";
        }

        return [
          <ListItem
            id="itemService"
            key={ service.id }
            primaryText={ service.text }
            onClick={ this.selectService.bind(this, service.id, service.text) }
            leftAvatar={ <Avatar src={service.icon}/> }
            style={style}/>,
          <ListDivider/>
        ]
      })
    }</List>
  }
});
