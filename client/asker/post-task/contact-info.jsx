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

// var customPalette = {
//   primary1Color: "#ff6666",
//   accent1Color: "#c0c0c0"
// };

const ThemeManager = new mui.Styles.ThemeManager();
// ThemeManager.setPalette(customPalette);

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
      addressValid: "",
      phoneValid: "",
      nameValid: "",
      emailValid: "",
    };
  },
  propTypes: {
  },
  getDefaultProps: function() {
    return {
      address: "",
      phone: "",
      name: "",
      email: "",
    };
  },

  postTask () {
    var address = this.refs.address.getValue();
    var phone = this.refs.phoneNumber.getValue();
    var name = this.refs.name.getValue();
    var email = this.refs.email.getValue();

    var nameRegex = /^[A-z ]+$/;
    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    addressValid = (address==""? "This field is required.":"");

    if (phone == "") {
      phoneValid = "This field is required.";
    } else if (isNaN(parseInt(phone))) {
      phoneValid = "The phone number is not valid";
    } else if (!(phone.length == 10) && !(phone.length == 11)) {
      phoneValid = "The phone number is the wrong length.";
    } else {
      phoneValid="";
    }

    if (name == "") {
      nameValid = "This field is required.";
    } else if ((name.length < 5) || (name.length > 20)) {
      nameValid = "The name is the wrong length.";
    } else if (!nameRegex.test(name)) {
      nameValid = "The name is not valid.";
    } else {
      nameValid = "";
    }

    var emailValid = "";
    if (email!="") emailValid = (emailRegex.test(email)? "":"Email is not valid.");
    if (addressValid=="" && phoneValid=="" &&
      nameValid=="" && emailValid=="") {
        React.render(<TaskPostConfirm
          serviceId={this.props.serviceId}
          serviceText={this.props.serviceText}
          description={this.props.description}
          date={this.props.date}
          time={this.props.time}
          duration={this.props.duration}
          cost={this.props.cost}
          address={address}
          phone={phone}
          name={name}
          email={email}/>, document.getElementById("container"));
        }
        else {
          this.setState({
            addressValid : addressValid,
            phoneValid : phoneValid,
            nameValid : nameValid,
            emailValid : emailValid
          });
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
                <div id= "Main2" className="main button-secondary">
                  <div>
                    <TextField ref="address"
                      floatingLabelText="Địa chỉ"
                      fullWidth={true}
                      defaultValue={this.props.address}
                      errorText={this.state.addressValid}
                      id="Address"/>
                  </div>
                  <div>
                    <TextField ref="phoneNumber"
                      floatingLabelText="Số điện thoại"
                      fullWidth={true}
                      defaultValue={this.props.phone}
                      errorText={this.state.phoneValid}
                      id="phoneNumber"/>
                  </div>
                  <div>
                    <TextField ref="name"
                      floatingLabelText="Họ tên"
                      fullWidth={true}
                      defaultValue={this.props.name}
                      errorText={this.state.nameValid}
                      id="name"/>
                  </div>
                  <div>
                    <TextField ref="email"
                      floatingLabelText="Email (optional)"
                      fullWidth={true}
                      defaultValue={this.props.email}
                      errorText={this.state.emailValid}
                      id="email"/>
                  </div>
                  <div className="padding-top padding-bottom">
                    <RaisedButton
                      id="Post"
                      label="Post Task"
                      secondary={true}
                      fullWidth={true}
                      onClick={this.postTask}/>
                  </div>
                </div>
              </div>
            );
          }
        });
