/**
* @Description: final screen for user confirm
* @Author: truongtk
*/

const{
  AppBar,
  IconButton,
  TextField,
  RaisedButton,
  Dialog,
  CardText,
  CardHeader,
  CardTitle,
  Card
} = mui;

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
// ThemeManager.setPalette(customPalette);

TaskPostConfirm = React.createClass({
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
    let queryParams = {
      serviceId: this.props.serviceId,
      serviceText: this.props.serviceText,
      description: this.props.description,
      date: this.props.date,
      time: this.props.time,
      duration: this.props.duration,
      cost: this.props.cost,
      address: this.props.address,
      phone: this.props.phone,
      name: this.props.name,
      email: this.props.email
    };
    FlowRouter.go("/list-service/fill-info","", queryParams);
  },

  confirm(){
    Meteor.call("addTask",this.props,function (error, result) {
      if (error) {
        console.log("Error");
      } else {
        console.log("Accepted");
      }
    });
    this.refs.dialog.show();
  },

  onClickConfirm() {
    FlowRouter.go("/ask-list");
  },

  render() {
    var fdate = this.props.date;
    var ftime = this.props.time;
    let rootStyle = {
      paddingBottom: 0,
      paddingTop:  10
    };
    let titleStyle = {
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.54)',
      lineHeight: '20px'
    };
    let subtitleStyle = {
      fontSize: 20,
      color: 'rgba(0, 0, 0, 0.87)'
    };
    return (
      <div>
        <AppBar
          className="appbar"
          title={this.props.serviceText}
          iconElementRight={
            <IconButton iconClassName="icon-help" />
          } />
          <div className="main">
            <CardTitle
              style={rootStyle}
              title="Description"
              titleStyle={titleStyle}
              subtitle={this.props.description}
              subtitleStyle={subtitleStyle}/>
            <CardTitle
              style={rootStyle}
              title="Start Date"
              titleStyle={titleStyle}
              subtitle={ftime + " " +fdate}
              subtitleStyle={subtitleStyle}/>
            <CardTitle
              style={rootStyle}
              title="Duration"
              titleStyle={titleStyle}
              subtitle={this.props.duration + "h"}
              subtitleStyle={subtitleStyle}/>
            <CardTitle
              style={rootStyle}
              title="Price"
              titleStyle={titleStyle}
              subtitle={this.props.cost +" VND"}
              subtitleStyle={subtitleStyle}/>
            <CardTitle
              style={rootStyle}
              title="Address"
              titleStyle={titleStyle}
              subtitle={this.props.address}
              subtitleStyle={subtitleStyle}/>
            <CardTitle
              style={rootStyle}
              title="Phone Number"
              titleStyle={titleStyle}
              subtitle={this.props.phone}
              subtitleStyle={subtitleStyle}/>
            <CardTitle
              style={rootStyle}
              title="Name"
              titleStyle={titleStyle}
              subtitle={this.props.name}
              subtitleStyle={subtitleStyle}/>
            {(this.props.email)?
              <CardTitle
                style={rootStyle}
                title="Email"
                titleStyle={titleStyle}
                subtitle={this.props.email}
                subtitleStyle={subtitleStyle}/>:<div></div>}
                <div className="padding-top">
                  <div className="backButton">
                    <RaisedButton
                      label="Back"
                      primary={true}
                      fullWidth={true}
                      onClick={this.onBack} />
                  </div>
                  <div className="nextButton">
                    <RaisedButton
                      id="Post"
                      label="Confirm"
                      secondary={true}
                      fullWidth={true}
                      onClick={this.confirm}/>
                  </div>
                </div>
                <Dialog
                  ref="dialog"
                  title="Thông báo"
                  actions={[{ text: 'OK',onTouchTap: this.onClickConfirm ,ref: 'OK' }]}
                  actionFocus="OK"
                  modal={true}>
                  Your Request is submitted
                </Dialog>
                <Dialog
                  ref="error"
                  title="Error"
                  actions={[{ text: 'Cancel',ref: 'Error' }]}
                  actionFocus="Error"
                  modal={true}>
                  Error occur when submit
                </Dialog>
              </div>
            </div>
          );
        }
      });
