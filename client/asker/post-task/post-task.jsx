/**
* @Description: Post task first page
* @Author: truongtk
*/

const{
  AppBar,
  IconButton
} = mui;

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
//ThemeManager.setPalette(customPalette);

PostTask = React.createClass({
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

  selectService(serviceId, serviceText) {
    this.setState({
      selectedServiceId: [serviceId]
    });
    let queryParams = {
      Id: serviceId,
      Text: serviceText
    };
    FlowRouter.go("/list-service/post-task","", queryParams);
    },

    onBack(){
      FlowRouter.go('/');
    },

    render() {
      let styleLoading = {
        textAlign: "center"
      };
      return (
        <div id="mainPostTask">
          <AppBar
            title="Service"
            iconElementRight={
              <div>
                <IconButton iconClassName="icon-help" />
                <IconButton iconClassName="icon-back" onClick={this.onBack} />
              </div>
            } />
            <div>
              <ListService
                selectedServiceId={this.state.selectedServiceId}
                onServiceSelected={this.selectService}/>
            </div>
          </div>
        );
      }
    });
