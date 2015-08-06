/**
* @Description: Post task first page
* @Author: truongtk
*/

const{
  AppBar,
  IconButton,
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
    React.render(<TaskInput />, document.getElementById("container"));
  },

  render() {
    return (
      <div>
        <AppBar
          title="Đăng công việc"
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
              <IconButton iconClassName="icon-back" />
            </div>
          } />
        <ListService
          services={this.data.services}
          selectedServiceId={this.state.selectedServiceId}
          onServiceSelected={this.selectService}/>
      </div>
    );
  }
});
