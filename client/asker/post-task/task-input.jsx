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

const ThemeManager = new mui.Styles.ThemeManager();

var duration = 2;
var descriptionLimit = 200;

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
      errorCost: false,
      errorCostText: "This field is required",
      textDescription: "Description (200)",
      textDescriptionLimit: "Thông tin bắt buộc"
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

  onFormatTime(date){
    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    var mm = date.getMinutes();
    mm = mm < 10 ? "0" + mm : mm;
    return h + ":" + mm;
  },

  onValidateDescription(description){
    if(description.length == 0){
      this.setState({
        errorDescription: true,
        textDescriptionLimit: "This field is required."
      });
    }
    else {
      var numOfCharacter = descriptionLimit - description.length;
      if(numOfCharacter < 0){
        this.setState({
          errorDescription: true,
          textDescriptionLimit: "Description must be less than 200 character."
        });
      }
      else {
        this.setState({
          errorDescription: false,
          textDescription: "Description (" + numOfCharacter + ")"
        });
      }
    }
  },

  onDescriptionChange(){
    this.onValidateDescription(this.refs.txtDescription.getValue().trim());
  },

  onBlurDescription(){
    this.onValidateDescription(this.refs.txtDescription.getValue().trim());
  },

  onChangeSliderDuration(e,value){
    duration = value;
    $("#hoursNumber").text(value + "h");
  },

  replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
  },

  onCostChange(){
    var cost = this.refs.txtCost.getValue();
    cost = this.replaceAll(",","",cost);
    cost = Number(cost);
    if(isNaN(cost)){
      this.setState({
        errorCost: true,
        errorCostText: "Cost must be a number."
      });
    }
    else {
      cost = accounting.formatNumber(cost);
      this.refs.txtCost.setValue(cost);
    }
  },

  onBlurCost(){
    var cost = this.refs.txtCost.getValue().trim();
    if(cost.length == 0){
      this.setState({
        errorCost: true,
        errorCostText: "This field is required"
      });
    }
    else {
      cost = this.replaceAll(",","",cost);
      if(isNaN(Number(cost))){
        this.setState({
          errorCost: true,
          errorCostText: "Cost must be a number."
        });
      }
      else {
        this.setState({
          errorCost: false
        });
      }
    }
  },

  onBack(){
    FlowRouter.go('/list-service');
  },

  onContactInfo(){
    var description = this.refs.txtDescription.getValue().trim();
    var cost = this.refs.txtCost.getValue().trim();
    cost = this.replaceAll(",","",cost);
    if(description.length == 0 || cost.length == 0 || isNaN(Number(cost))){
      if(description.length == 0){
        this.setState({
          errorDescription: true,
          textDescriptionLimit: "This field is required."
        });
      }
      else {
        var numOfCharacter = descriptionLimit - description.length;
        if(numOfCharacter < 0){
          this.setState({
            errorDescription: true,
            textDescriptionLimit: "Description must be less than 200 character."
          });
        }
        else {
          this.setState({
            errorDescription: false,
            textDescription: "Description (" + numOfCharacter + ")"
          });
        }
      }

      if(cost.length == 0){
        this.setState({
          errorCost: true,
          errorCostText: "This field is required"
        });
      }
      else {
        if(isNaN(Number(cost))){
          this.setState({
            errorCost: true,
            errorCostText: "Cost must be a number."
          });
        }else {
          this.setState({
            errorCost: false
          });
        }
      }
    }
    else {
      var numOfCharacter = descriptionLimit - description.length;
      if(numOfCharacter < 0){
        this.setState({
          errorDescription: true,
          textDescriptionLimit: "Description must be less than 200 character."
        });
      }
      else {
        this.setState({
          errorDescription: false,
          errorCost: false
        },function(){
          if(!this.state.errorDescription && !this.state.errorCost){
            let date = this.onFormatDate(this.refs.dpDate.getDate());
            let time = this.onFormatTime(this.refs.dpTime.getTime());
            let queryParams = {
              Id: this.props.Id,
              Text: this.props.Text,
              description: description,
              date: date,
              time: time,
              duration: duration,
              cost: this.refs.txtCost.getValue().trim()
            };
            FlowRouter.go("/list-service/fill-info","", queryParams);
            }
          });
        }
      }
    },

    componentDidMount: function() {
      if(this.props.description){
        var numOfCharacter = descriptionLimit - this.props.description.length;
        this.setState({
          textDescription: "Description (" + numOfCharacter + ")"
        });
      }

      var date = new Date();

      // Default Date is Tomorrow
      if(this.props.date == null || this.props.date == ""){
        date.setDate(date.getDate() + 1);
        this.refs.dpDate.setDate(date);
      }
      else {
        var date = this.props.date;
        date = date.split('/');
        date = new Date(date[2],date[1] - 1,date[0]);
        this.refs.dpDate.setDate(date);
      }

      // Default Time is 08:00 AM
      if(this.props.time == null || this.props.time == ""){
        date.setHours(8);
        date.setMinutes(0);
        this.refs.dpTime.setTime(date);
      }
      else {
        var time = this.props.time;
        time = time.split(':');
        date.setHours(time[0]);
        date.setMinutes(time[1]);
        this.refs.dpTime.setTime(date);
      }

      // Set value Slider
      if(this.props.duration > 0){
        duration = this.props.duration;
        this.refs.sliderDuration.setValue(this.props.duration);
        $("#hoursNumber").text(this.props.duration + "h");
      }
    },

    render() {
      return (
        <div>
          <AppBar
            className="appbar"
            title={this.props.Text}
            iconElementRight={
              <div>
                <IconButton iconClassName="icon-help" />
                <IconButton iconClassName="icon-back" onClick={this.onBack} />
              </div>
          } />
          <div className="main padding-left-right">
            <TextField
              id="txtDescription"
              ref="txtDescription"
              className="txtDescription"
              multiLine={true}
              floatingLabelText={this.state.textDescription}
              errorText={this.state.errorDescription ? this.state.textDescriptionLimit : ""}
              defaultValue={this.props.description != "" ? this.props.description : ""}
              onChange={this.onDescriptionChange}
              onBlur={this.onBlurDescription}
              fullWidth={true} />
            <DatePicker
              className="dpDate"
              ref="dpDate"
              hintText="Date"
              autoOk={true}
              formatDate={this.onFormatDate}/>
            <TimePicker
              className="dpTime"
              ref="dpTime"
              format="24hr"
              hintText="Time"/>
            <br/>
          <div>
            <span id="hoursNumber">2h</span>
          </div>
          <Slider
            id="sliderDuration"
            ref="sliderDuration"
            name="sliderDuration"
            min={0.5}
            max={10}
            step={0.5}
            value={duration}
            fullWidth={true}
            onChange={this.onChangeSliderDuration} />
          <TextField
            id="txtCost"
            ref="txtCost"
            floatingLabelText="Cost (VND)"
            errorText={this.state.errorCost ? this.state.errorCostText : ""}
            defaultValue={this.props.cost != "" ? this.props.cost : ""}
            onChange={this.onCostChange}
            onBlur={this.onBlurCost}
            fullWidth={true}/>
          <br/>
          <div className="button-secondary padding-bottom">
            <RaisedButton
              label="Back"
              primary={true}
              onClick={this.onBack} />
            <RaisedButton
              id="btnNext"
              label="Next"
              secondary={true}
              onClick={this.onContactInfo} />
          </div>
          </div>
        </div>
      );
    }
  });
