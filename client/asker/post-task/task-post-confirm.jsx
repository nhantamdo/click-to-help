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
    React.render(<ContactInfo
      serviceId={this.props.serviceId}
      serviceText={this.props.serviceText}
      description={this.props.description}
      date={this.props.date}
      time={this.props.time}
      duration={this.props.duration}
      cost={this.props.cost}
      address={this.props.address}
      phone={this.props.phone}
      name={this.props.name}
      email={this.props.email}/>, document.getElementById("container"));
    },

    confirm(){
      Meteor.call("addTask",this.props);
      this.refs.dialog.show();
    },

    render() {
      var date = this.props.date;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var y = date.getFullYear();
      var fdate = d + "/" + m + "/" + y;
      var time = this.props.time;
      var h = time.getHours();
      h = h < 10 ? "0" + h : h;
      var m = time.getMinutes();
      m = m < 10 ? "0" + m : m;
      var ftime=h+":"+m;
      return (
        <div>
          <AppBar
            className="appbar"
            title={this.props.serviceText}
            iconElementRight={
              <div>
                <IconButton iconClassName="icon-help" />
                <IconButton iconClassName="icon-back" onClick={this.onBack} />
              </div>
            } />
            <div className="main">
              <div className="padding-left-right padding-top" id="discription">
                <span className="title">Mô tả công việc:</span>
                <br/>
                <span className="text">{this.props.description}</span>
              </div>
              <div className="padding-left-right padding-top" id="time-work">
                <span className="title">Bắt đầu:</span>
                <span className="text-right">{ftime} {fdate}</span>
              </div>
              <div className="padding-left-right padding-top" id="duration">
                <span className="title">Thời gian:</span>
                <span className="text-right">{this.props.duration}h</span>
              </div>
              <div className="padding-left-right padding-top" id="price">
                <span className="title">Giá:</span>
                <span className="text-right">{this.props.cost} VND</span>
              </div>
              <div className="padding-left-right padding-top" id="location">
                <span className="title">Địa điểm:</span>
                <span className="text-right">{this.props.address}</span>
              </div>
              <div className="padding-left-right padding-top" id="phone">
                <span className="title">Số liên lạc:</span>
                <span className="text-right">{this.props.phone}</span>
              </div>
              <div className="padding-left-right padding-top" id="name">
                <span className="title">Họ Tên:</span>
                <span className="text-right">{this.props.name}</span>
              </div>
              {(this.props.email=="")? "" :
                <div className="padding-left-right padding-top" id="Email">
                  <span className="title">Email:</span>
                  <span className="text-right">{this.props.email}</span>
                </div>}
                <div className="padding-top padding-bottom">
                  <RaisedButton
                    id="Post"
                    label="Xác nhận"
                    secondary={true}
                    fullWidth={true}
                    onClick={this.confirm}/>
                </div>
                <Dialog
                  ref="dialog"
                  title="Thông báo"
                  actions={[{ text: 'Kết thúc', ref: 'OK' }]}
                  actionFocus="OK"
                  modal={true}>
                  Yêu cầu của bạn đã được gửi
                </Dialog>
              </div>
            </div>
          );
        }
      });
