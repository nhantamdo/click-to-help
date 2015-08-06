/**
* @Description: Post a task
* @Author: linhnh
*/

const{
  AppBar,
  IconButton,
  TextField,
  DatePicker,
  TimePicker,
  Slider,
  RaisedButton
} = mui;

var customPalette = {
  primary1Color: "#ff6666",
  accent1Color: "#c0c0c0"
};

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setPalette(customPalette);

TaskInput = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState: function () {
    return {
      errorDescription: false
    };
  },

  propTypes: {
    selectedServiceId: React.PropTypes.string
  },

  onFormatDate(date){
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var y = date.getFullYear();
    return d + "/" + m + "/" + y;
  },

  onChangeSliderDuration(e,value){
    var cost = 50 * value;
    $("#Cost").text("$" + cost + "/" + value + "h");
  },

  onBack(){
    React.render(<PostTask />, document.getElementById("container"));
  },

  onContactInfo(){
    if(!this.state.errorDescription){
      React.render(<ContactInfo
              serviceId={this.props.serviceId}
              serviceText={this.props.serviceText}/>, document.getElementById("container"));
    }
  },

  onBlurDescription(){
    if(this.refs.txtDescription.getValue().trim().length == 0){
      this.setState({
        errorDescription: true
      });
    }
    else {
      this.setState({
        errorDescription: false
      });
    }
  },

  componentDidMount: function() {
    this.refs.txtDescription.focus();

    // Default Date is Tomorrow
    var date = new Date();
    date.setDate(date.getDate() + 1);
    this.refs.dpDate.setDate(date);
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
        <TextField
          ref="txtDescription"
          multiLine={true}
          floatingLabelText="Mô tả công việc (200)"
          errorText={this.state.errorDescription ? "Nhập mô tả" : ""}
          onBlur={this.onBlurDescription}
          fullWidth={true} />
        <DatePicker
          ref="dpDate"
          hintText="Ngày"
          autoOk={true}
          formatDate={this.onFormatDate}
          fullWidth={true} />
        <TimePicker
          format="24hr"
          hintText="Giờ"
          fullWidth={true} />
        <Slider
          name="sliderDuration"
          min={0}
          max={10}
          step={1}
          fullWidth={true}
          onChange={this.onChangeSliderDuration} />
        <div>
          Giá tiền:
          <strong id="Cost">$0</strong>
        </div>
        <br/>
        <div className="button-secondary">
          <RaisedButton
            label="Tiếp theo"
            secondary={true}
            fullWidth={true}
            onClick={this.onContactInfo} />
        </div>
      </div>
    );
  }
});
