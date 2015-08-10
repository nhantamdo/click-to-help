Service.upsert({
  id: "001",
  icon: "icons/img/house-cleanning.png",
  text: "Dọn dẹp nhà"
}, {
  $set: {
    icon: "icons/img/house-cleanning.png",
    text: "Dọn dẹp nhà"
  }
});
Service.upsert({
  id: "002",
  icon: "icons/img/home-massage.png",
  text: "Massage tại nhà"
}, {
  $set: {
    icon: "icons/img/home-massage.png",
    text: "Massage tại nhà"
  }
});
Service.upsert({
  id: "003",
  icon: "icons/img/shopping-help.png",
  text: "Đi chợ giúp"
}, {
  $set: {
    icon: "icons/img/shopping-help.png",
    text: "Đi chợ giúp"
  }
});
Service.upsert({
  id: "004",
  icon: "icons/img/baby-care.png",
  text: "Chăm sóc trẻ"
},
{
  $set: {
    icon: "icons/img/baby-care.png",
    text: "Chăm sóc trẻ"
  }
});
Service.upsert({
  id: "005",
  icon: "icons/img/text-translate.png",
  text: "Dịch thuật"
}, {
  $set: {
    icon: "icons/img/text-translate.png",
    text: "Dịch thuật"
  }
});

Tasker.upsert({
  _id:1,
  username:"toanpp",
  email:"toanpp@twin.vn"
},{
  $set:{
    _id:1,
    username:"toanpp",
    email:"toanpp@twin.vn"
  }
});

Task.upsert({
  _id:"bSrRwwWasRb79P22c",
  serviceId:"001",
  description:"Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách",
  startDate:"2015-08-15",
  startTime:"00:08:00",
  duration:4.0,
  address:"104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
  phone:"01228833055",
  email:"toanpp@twin.vn",
  createdAt:"2015-08-10T12:00:00"
},
{
  $set: {
    _id:"bSrRwwWasRb79P22c",
    serviceId:"001",
    description:"Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách",
    startDate:"2015-08-15",
    startTime:"00:08:00",
    duration:4.0,
    address:"104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
    phone:"01228833055",
    email:"toanpp@twin.vn",
    createdAt:"2015-08-10T12:00:00"
  }
});

TaskStatus.upsert({
  taskId:"bSrRwwWasRb79P22c",
  taskerId:1,
  status:"unread",
  createdAt:"2015-08-10T12:00:00",
  updatedAt:"2015-08-10T12:00:00"
},
{
  $set:{
    taskId:"bSrRwwWasRb79P22c",
    taskerId:1,
    status:"unread",
    createdAt:"2015-08-10T12:00:00",
    updatedAt:"2015-08-10T12:00:00"
  }
});

Task.upsert({
  _id:"bSrRwwWasRb79P22d",
  serviceId:"002",
  description:"Massage tai nha",
  startDate:"2015-08-15",
  startTime:"00:08:00",
  duration:1,
  address:"104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
  phone:"01228833055",
  email:"linhnh@twin.vn",
  createdAt:"2015-08-10T12:00:00"
},
{
  $set: {
    _id:"bSrRwwWasRb79P22d",
    serviceId:"002",
    description:"Massage tai nha",
    startDate:"2015-08-15",
    startTime:"00:08:00",
    duration:1,
    address:"104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
    phone:"01228833055",
    email:"linhnh@twin.vn",
    createdAt:"2015-08-10T12:00:00"
  }
});

TaskStatus.upsert({
  taskId:"bSrRwwWasRb79P22d",
  taskerId:1,
  status:"unread",
  createdAt:"2015-08-10T12:00:00",
  updatedAt:"2015-08-10T12:00:00"
},
{
  $set:{
    taskId:"bSrRwwWasRb79P22d",
    taskerId:1,
    status:"unread",
    createdAt:"2015-08-10T12:00:00",
    updatedAt:"2015-08-10T12:00:00"
  }
});
