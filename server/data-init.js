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

tasker1 = Tasker.upsert({
  username: "toanpp",
  email: "toanpp@twin.vn",
  avatar: "avatars/toanpp.jpg"
}, {
  $set: {
    username: "toanpp",
    email: "toanpp@twin.vn",
    avatar: "avatars/toanpp.jpg"
  }
});

tasker2 = Tasker.upsert({
  username: "linhnh",
  email: "linhnh@twin.vn",
  avatar: "avatars/linhnh.jpg"
}, {
  $set: {
    username: "linhnh",
    email: "linhnh@twin.vn",
    avatar: "avatars/linhnh.jpg"
  }
});

tasker3 = Tasker.upsert({
  username: "truongtt",
  email: "truongtt@twin.vn",
  avatar: "avatars/truongtk.jpg"
}, {
  $set: {
    username: "truongtt",
    email: "truongtt@twin.vn",
    avatar: "avatars/truongtk.jpg"
  }
});

task1 = Task.upsert({
  serviceId: "001",
  description: "Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách",
  date: new Date(),
  time: new Date(),
  duration: 4.0,
  address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
  phone: "01228833055",
  email: "toanpp@twin.vn",
  cost: 200000,
  createdAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      serviceId: "001",
      description: "Lau dọn nhà trong ngày 15/08/2015, bao gồm 2 phòng ngủ, 1 phòng khách",
      date: new Date(),
      time: new Date(),
      duration: 4.0,
      address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
      phone: "01228833055",
      email: "toanpp@twin.vn",
      cost: 200000,
      createdAt: "2015-08-10T12:00:00"
    }
  });

TaskStatus.upsert({
  taskId: task1.insertedId,
  taskerId: tasker1.insertedId,
  status: "accepted",
  createdAt: "2015-08-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
{
  $set: {
    taskId: task1.insertedId,
    taskerId: tasker1.insertedId,
    status: "accepted",
    createdAt: "2015-08-10T12:00:00",
    updatedAt: "2015-08-10T12:00:00"
  }
});

task2 = Task.upsert({
  serviceId: "002",
  description: "Massage tai nha",
  date: new Date(),
  time: new Date(),
  duration: 1,
  address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
  phone: "01228833055",
  email: "linhnh@twin.vn",
  cost: 300000,
  createdAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      serviceId: "002",
      description: "Massage tai nha",
      date: new Date(),
      time: new Date(),
      duration: 1,
      address: "104 Mai Thị Lựu, Đakao, Quận 1, TP.HCM",
      phone: "01228833055",
      email: "linhnh@twin.vn",
      cost: 300000,
      createdAt: "2015-08-10T12:00:00"
    }
  });

TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "confirmed",
  createdAt: "2015-08-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "confirmed",
      createdAt: "2015-08-10T12:00:00",
      updatedAt: "2015-08-10T12:00:00"
    }
  });

TaskStatus.upsert({
  taskId: task1.insertedId,
  taskerId: tasker1.insertedId,
  status: "unread",
  createdAt: "2015-08-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      taskId: task1.insertedId,
      taskerId: tasker1.insertedId,
      status: "unread",
      createdAt: "2015-08-10T12:00:00",
      updatedAt: "2015-08-10T12:00:00"
    }
  });
  TaskStatus.upsert({
    taskId: task1.insertedId,
    taskerId: tasker2.insertedId,
    status: "unread",
    createdAt: "2015-08-10T12:00:00",
    updatedAt: "2015-08-10T12:00:00"
  },
    {
      $set: {
        taskId: task1.insertedId,
        taskerId: tasker2.insertedId,
        status: "unread",
        createdAt: "2015-08-10T12:00:00",
        updatedAt: "2015-08-10T12:00:00"
      }
    });


TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: "2015-08-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: "2015-08-10T12:00:00",
      updatedAt: "2015-08-10T12:00:00"
    }
  });

TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: "2015-07-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: "2015-07-10T12:00:00",
      updatedAt: "2015-08-10T12:00:00"
    }
  });
TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: "2015-06-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: "2015-06-10T12:00:00",
      updatedAt: "2015-08-10T12:00:00"
    }
  });
TaskStatus.upsert({
  taskId: task2.insertedId,
  taskerId: tasker1.insertedId,
  status: "read",
  createdAt: "2015-05-10T12:00:00",
  updatedAt: "2015-08-10T12:00:00"
},
  {
    $set: {
      taskId: task2.insertedId,
      taskerId: tasker1.insertedId,
      status: "read",
      createdAt: "2015-05-10T12:00:00",
      updatedAt: "2015-08-10T12:00:00"
    }
  });
