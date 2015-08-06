/**
* @Description: Post task first page
* @Author: truongtk
*/

const{
  AppBar,
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

PostTask = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      services: Service.find().fetch()
    }
  },

  getInitialState: function () {
    return {
      selectedServiceId: []
    };
  },
  propTypes: {
  },

  selectService(serviceId) {
    this.setState({
      selectedServiceId: [serviceId]
    });
    console.log(this.state.selectedServiceId);
  },

  render() {
    return (
      <div>
        <AppBar
          title="Post Task" />
        <div id="main">
            <ListService
              services={this.data.services}
              selectedServiceId={this.state.selectedServiceId}
              onServiceSelected={this.selectService} />
          </div>
      </div>
    );
  }
});
