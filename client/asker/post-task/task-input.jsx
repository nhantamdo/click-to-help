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
          multiLine={true}
          floatingLabelText="Mô tả công việc (200)"
          fullWidth={true} />
        <DatePicker
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
            fullWidth={true} />
        </div>
      </div>
    );
  }
});
