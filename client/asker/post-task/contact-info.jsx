/**
* @Description: add contact Info
* @Author: truongtk
*/

const{
  TextField,
  RaisedButton,
  Dialog
} = mui;

ContactInfo = React.createClass({
  getInitialState () {
    return {
    };
  },
  propTypes: {
  },

  postTask () {
    this.refs.dialog.show();
  },

  render() {
    let standardActions = [
    { text: 'OK', ref: 'OK' }
    ];
    return (
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
    );
  }
});
