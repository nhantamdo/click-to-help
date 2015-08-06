/**
* @Description: Post a task
* @Author: linhnh
*/

const{
  TextField,
  DatePicker,
  TimePicker,
  Slider,
  RaisedButton
} = mui;

TaskInput = React.createClass({
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

  render() {
    return (
      <div>
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
