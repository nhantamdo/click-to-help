/**
* @Description: Post task first page
* @Author: truongtk
*/

const{
} = mui;

PostTask = React.createClass({
  getInitialState () {
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
    console.log(serviceId);
  },

  render() {
    return (
      <div>
        <div id="main">
          <ListService
            selectedServiceId={this.state.selectedServiceId}
            onServiceSelected={this.selectService}/>
        </div>
      </div>
    );
  }
});
