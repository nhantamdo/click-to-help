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
    };
  },
  propTypes: {
  },

  postTask () {
    this.refs.dialog.show();
  },

  onBack(){
    React.render(<TaskInput
            serviceId={this.props.serviceId}
            serviceText={this.props.serviceText}/>, document.getElementById("container"));
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
                floatingLabelText="Address"
                fullWidth={true}
                id="Address"/>
            </div>
            <div>
              <TextField ref="phoneNumber"
                floatingLabelText="Phone number"
                fullWidth={true}
                id="phoneNumber"/>
            </div>
            <div>
              <TextField ref="name"
                floatingLabelText="Your fullname"
                defaultValue={this.props.taskerEmail}
                fullWidth={true}
                id="name"/>
            </div>
            <div>
              <TextField ref="name"
                floatingLabelText="Your email (optional)"
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
