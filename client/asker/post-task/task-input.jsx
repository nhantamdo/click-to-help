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

var duration = 2;

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
      errorDescription: false,
      errorCost: false
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
    duration = value;
    $("#hoursNumber").text(value + "h");
  },

  onBack(){
    React.render(<PostTask />, document.getElementById("container"));
  },

  onContactInfo(){
    var description = this.refs.txtDescription.getValue().trim();
    var cost = this.refs.txtCost.getValue().trim();
    if(description.length == 0 || cost.length == 0){
      if(description.length == 0){
        this.setState({
          errorDescription: true
        });
      }
      else {
        this.setState({
          errorDescription: false
        });
      }

      if(cost.length == 0){
        this.setState({
          errorCost: true
        });
      }
      else {
        this.setState({
          errorCost: false
        });
      }
    }
    else {
      this.setState({
        errorDescription: false,
        errorCost: false
      },function(){
        if(!this.state.errorDescription && !this.state.errorCost){
          React.render(<ContactInfo
                  serviceId={this.props.serviceId}
                  serviceText={this.props.serviceText}
                  description={description}
                  date={this.refs.dpDate.getDate()}
                  time={this.refs.dpTime.getTime()}
                  duration={duration}
                  cost={this.refs.txtCost.getValue().trim()}/>, document.getElementById("container"));
        }
      });
    }
  },

  componentDidMount: function() {
    //this.refs.txtDescription.focus();

    var date = new Date();

    // Default Date is Tomorrow
    if(this.props.date == null){
      date.setDate(date.getDate() + 1);
      this.refs.dpDate.setDate(date);
    }
    else {
      this.refs.dpDate.setDate(this.props.date);
    }

    // Default Time is 08:00 AM
    if(this.props.time == null){
      date.setHours(8);
      date.setMinutes(0);
      this.refs.dpTime.setTime(date);
    }
    else {
      this.refs.dpTime.setTime(this.props.time);
    }

    // Set value Slider
    if(this.props.duration > 0){
      this.refs.sliderDuration.setValue(this.props.duration);
      $("#hoursNumber").text(this.props.duration + "h");
    }
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
          className="txtDescription"
          multiLine={true}
          floatingLabelText="Mô tả công việc (200)"
          errorText={this.state.errorDescription ? "Thông tin bắt buộc" : ""}
          defaultValue={this.props.description != "" ? this.props.description : ""}
          fullWidth={true} />
        <DatePicker
          ref="dpDate"
          hintText="Ngày"
          autoOk={true}
          formatDate={this.onFormatDate}
          fullWidth={true} />
        <TimePicker
          ref="dpTime"
          format="24hr"
          hintText="Giờ"
          fullWidth={true} />
        <br/>
        <div>
          <span id="hoursNumber">2h</span>
        </div>
        <Slider
          ref="sliderDuration"
          name="sliderDuration"
          min={0.5}
          max={10}
          step={0.5}
          value={2}
          fullWidth={true}
          onChange={this.onChangeSliderDuration} />
        <TextField
          ref="txtCost"
          floatingLabelText="Giá tiền (VND)"
          errorText={this.state.errorCost ? "Thông tin bắt buộc" : ""}
          defaultValue={this.props.cost != "" ? this.props.cost : ""}
          fullWidth={true}/>
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
