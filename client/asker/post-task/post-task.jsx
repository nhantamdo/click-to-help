/**
* @Description: Post task first page
* @Author: truongtk
*/

const{
  AppBar,
  IconButton
} = mui;

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

 const ThemeManager = new mui.Styles.ThemeManager();
 ThemeManager.setPalette(customPalette);

PostTask = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

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
      <ListService
        services={this.data.services}
        selectedServiceId={this.state.selectedServiceId}
        onServiceSelected={this.selectService}/>
    );
  }
});
