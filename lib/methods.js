Meteor.methods({
  addTask: function(props) {
    return Task.insert({
      serviceId: props.serviceId,
      description: props.description,
      date: props.date,
      time: props.time,
      duration: props.duration,
      cost: props.cost,
      address: props.address,
      phone: props.phone,
      name: props.name,
      email: props.email
    });
  }
});
