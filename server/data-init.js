Meteor.startup(function () {
  Service.remove({});
  Task.remove({});
  TaskStatus.remove({});
  Tasker.remove({});
  ClickStatus.remove({});
  User.remove({});

  Service.insert({
    id: "001",
    icon: "icons/img/house-cleanning.png",
    text: "House Cleaning"
  });
  Service.insert({
    id: "002",
    icon: "icons/img/home-massage.png",
    text: "Home Massage"
  });
  Service.insert({
    id: "003",
    icon: "icons/img/shopping-help.png",
    text: "Help Shopping"
  });
  Service.insert({
    id: "004",
    icon: "icons/img/baby-care.png",
    text: "Baby Care"
  });
  Service.insert({
    id: "005",
    icon: "icons/img/text-translate.png",
    text: "Text Translate"
  });

  tasker1 = Tasker.insert({
    username: "toanpp",
    email: "toanpp@twin.vn",
    avatar: "avatars/toanpp.jpg"
  });
  ClickStatus.insert({
    type:1,//0:asker 1:Tasker
    userId:tasker1,
    clickAt: new Date()
  });

  tasker2 = Tasker.insert({
    username: "linhnh",
    email: "linhnh@twin.vn",
    avatar: "avatars/linhnh.jpg"
  });
  ClickStatus.insert({
    type:1,//0:asker 1:Tasker
    userId:tasker2,
    clickAt: new Date()
  });

  tasker3 = Tasker.insert({
    username: "truongtt",
    email: "truongtt@twin.vn",
    avatar: "avatars/truongtk.jpg"
  });
  ClickStatus.insert({
    type:1,//0:asker 1:Tasker
    userId:tasker3,
    clickAt: new Date()
  });

  task1 = Task.insert({
    serviceId: "001",
    userId: "0123456789",
    description: "Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách",
    date: new Date(),
    time: new Date(),
    duration: 4.0,
    address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
    phone: "01228833055",
    email: "toanpp@twin.vn",
    cost: 200000,
    createdAt: new Date()
  });
  task2 = Task.insert({
    serviceId: "002",
    userId: "0123456789",
    description: "Massage tai nha",
    date: new Date(),
    time: new Date(),
    duration: 1,
    address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
    phone: "01228833055",
    email: "linhnh@twin.vn",
    cost: 300000,
    createdAt: new Date()
  });

  TaskStatus.insert({
    taskId: task1,
    taskerId: tasker1,
    status: "accepted",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  TaskStatus.insert({
    taskId: task2,
    taskerId: tasker1,
    status: "accepted",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  TaskStatus.insert({
    taskId: task1,
    taskerId: tasker2,
    status: "unread",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  TaskStatus.insert({
    taskId: task2,
    taskerId: tasker1,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "unread"
  });
  TaskStatus.insert({
    taskId: task2,
    taskerId: tasker1,
    status: "read",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  TaskStatus.insert({
    taskId: task2,
    taskerId: tasker1,
    status: "read",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  TaskStatus.insert({
    taskId: task2,
    taskerId: tasker1,
    status: "read",
    createdAt: new Date(),
    updatedAt: new Date()
  });

  User.insert({
    phone: "0123456789",
    name: "Toan",//phone number
    createAt: new Date()
  });

  ClickStatus.insert({
    type:0,//0:asker 1:Tasker
    userId:"0123456789",
    clickAt: new Date()
  });
  ClickStatus.insert({
    type:0,//0:asker 1:Tasker
    userId:"9876543210",
    clickAt: new Date()
  });
});
