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

  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      services: Service.find().fetch()
    }
  },

  selectService(ServiceId) {
    this.props.onServiceSelected(ServiceId);
  },

  render() {
    return <List subheader="Service List">{
      this.data.services.map((service) => {
        let style = {};
        if (this.props.selectedServiceId.indexOf(service.id) != -1) {
          style["color"] = "#ff6666";
        }

        return [
          <ListItem key={ service.id }
            primaryText={ service.text }
            onClick={ this.selectService.bind(this, service.id) }
            leftAvatar={ <Avatar src={service.icon}/> }
            style={style}/>,
          <ListDivider/>
        ]
      })
    }</List>
  }
});
