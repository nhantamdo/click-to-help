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

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setPalette(customPalette);

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
  },

  confirm(){
    this.refs.dialog.show();
  },

  render() {
    return (
      <div>
        <AppBar
          title={this.props.serviceText}
          iconElementRight={
            <div>
              <IconButton iconClassName="icon-help" />
              <IconButton iconClassName="icon-back" onClick={this.onBack} />
            </div>
          } />
          <div className="padding-left-right padding-top" id="discription">
            <span className="title">Mô tả công việc:</span>
            <br/>
            <span className="text">Đây là dòng mô tả công việc spam spam spam spam spam spam spam spam spam</span>
          </div>
          <div className="padding-left-right padding-top" id="time-work">
            <span className="title">Bắt đầu:</span>
            <span className="text-right">8:00 8/8/2018</span>
            <span className="title padding-left">Thời gian:</span>
            <span className="text-right">8h</span>
          </div>
          <div className="padding-left-right padding-top" id="price">
            <span className="title">Giá:</span>
            <span className="text-right">200.000 VND</span>
          </div>
          <div className="padding-left-right padding-top" id="location">
            <span className="title">Địa điểm:</span>
            <span className="text-right">105 Mai Thị Lựu Q.1</span>
          </div>
          <div className="padding-left-right padding-top" id="phone">
            <span className="title">Số liên lạc:</span>
            <span className="text-right">0123456789</span>
          </div>
          <div className="padding-left-right padding-top" id="name">
            <span className="title">Họ Tên:</span>
            <span className="text-right">Trần Kim Trưởng</span>
          </div>
          <div className="padding-left-right padding-top" id="Email">
            <span className="title">Email:</span>
            <span className="text-right">truongtk@twin.vn</span>
          </div>
          <div className="padding-top">
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
      );
    }
  });
