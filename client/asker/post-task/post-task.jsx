/**
* @Description: Post task first page
* @Author: truongtk
*/

const{
} = mui;

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
    setTimeout(function(){
      console.log(serviceId);
    },1000);
  },

  render() {
    return (
      <div>
        <div id="main">
          <ListService
            services={this.data.services}
            selectedServiceId={this.state.selectedServiceId}
            onServiceSelected={this.selectService}/>
        </div>
      </div>
    );
  }
});
