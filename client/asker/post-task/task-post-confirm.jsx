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
  CardHeader
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
      return (
        <div>
          <AppBar
            className="appbar"
            title={this.props.serviceText}
            iconElementRight={
              <IconButton iconClassName="icon-help" />
            } />
            <div className="main padding-left-right">
              <div className=" padding-top" id="discription">
                <span className="title">Mô tả công việc:</span>
                <br/>
                <span className="text">{this.props.description}</span>
              </div>
              <div className=" padding-top" id="time-work">
                <span className="title">Bắt đầu:</span>
                <span className="text-right">{ftime} {fdate}</span>
              </div>
              <div className=" padding-top" id="duration">
                <span className="title">Thời gian:</span>
                <span className="text-right">{this.props.duration}h</span>
              </div>
              <div className=" padding-top" id="price">
                <span className="title">Giá:</span>
                <span className="text-right">{this.props.cost} VND</span>
              </div>
              <div className=" padding-top" id="location">
                <span className="title">Địa điểm:</span>
                <span className="text-right">{this.props.address}</span>
              </div>
              <div className=" padding-top" id="phone">
                <span className="title">Số liên lạc:</span>
                <span className="text-right">{this.props.phone}</span>
              </div>
              <div className=" padding-top" id="name">
                <span className="title">Họ Tên:</span>
                <span className="text-right">{this.props.name}</span>
              </div>
              {(this.props.email=="")? "" :
                <div className=" padding-top" id="Email">
                  <span className="title">Email:</span>
                  <span className="text-right">{this.props.email}</span>
                </div>}
                <div className="padding-top padding-bottom button-secondary">
                  <RaisedButton
                    label="Back"
                    primary={true}
                    onClick={this.onBack} />
                  <RaisedButton
                    id="Post"
                    label="OK"
                    secondary={true}
                    onClick={this.confirm}/>
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
