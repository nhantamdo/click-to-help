/**
* @Description: add contact Info
* @Author: truongtk
*/

const{
  AppBar,
  IconButton,
  TextField,
  RaisedButton,
  Dialog
} = mui;

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setPalette(customPalette);

ContactInfo = React.createClass({
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
      addressExist: true,
      phoneExist: true,
      nameExist: true
    };
  },
  propTypes: {
  },

  postTask () {
    if (this.refs.address.getValue()=="") {
      this.setState({
        addressExist : false
      });
    }
    else {
      this.setState({
        addressExist : true
      });
    }
    if (this.refs.phoneNumber.getValue()=="") {
      this.setState({
        phoneExist : false
      });
    }
    else {
      this.setState({
        phoneExist : true
      });
    }
    if (
      this.refs.name.getValue()=="") {this.setState({
        nameExist : false
      });
    }
    else {
      this.setState({
        nameExist : true
      });
    }
    if (this.refs.address.getValue()!=""
    &&this.refs.phoneNumber.getValue()!=""
    &&this.refs.name.getValue()!=""){
      this.refs.dialog.show();
    }
  },

  onBack(){
    React.render(<TaskInput
      serviceId={this.props.serviceId}
      serviceText={this.props.serviceText}
      description={this.props.description}
      date={this.props.date}
      time={this.props.time}
      duration={this.props.duration}
      cost={this.props.cost}/>, document.getElementById("container"));
    },

    render() {
      let standardActions = [
      { text: 'OK', ref: 'OK' }
      ];
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
            <div id= "Main2" className="button-secondary">
              <div>
                <TextField ref="address"
                  floatingLabelText="Địa chỉ"
                  fullWidth={true}
                  errorText={this.state.addressExist? "":"Thông tin bắt buộc"}
                  id="Address"/>
              </div>
              <div>
                <TextField ref="phoneNumber"
                  floatingLabelText="Số điện thoại"
                  fullWidth={true}
                  errorText={this.state.phoneExist? "":"Thông tin bắt buộc"}
                  id="phoneNumber"/>
              </div>
              <div>
                <TextField ref="name"
                  floatingLabelText="Họ tên"
                  fullWidth={true}
                  errorText={this.state.nameExist? "":"Thông tin bắt buộc"}
                  id="name"/>
              </div>
              <div>
                <TextField ref="email"
                  floatingLabelText="Email (optional)"
                  fullWidth={true}
                  id="email"/>
              </div>
              <div className="button-padding-top">
                <RaisedButton
                  id="Post"
                  label="Post Task"
                  secondary={true}
                  fullWidth={true}
                  onClick={this.postTask}/>
              </div>
              <Dialog
                ref="dialog"
                title="Confirm"
                actions={standardActions}
                actionFocus="OK"
                modal={true}>
                Your task had been posted.
              </Dialog>
            </div>
          </div>
        );
      }
    });
