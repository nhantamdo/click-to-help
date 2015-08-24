//Description: this file define configurations of social service
//Author: toanpp
ServiceConfiguration.configurations.upsert(
  {
    service: "facebook"
  },
  {
    $set: {
      clientId: "810796205683028",
      loginStyle: "popup",
      secret: "71a127cc3dc7a218f23f4a31fb020ad0"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  {
    service: "google"
  },
  {
    $set: {
      clientId: "11126875356-v5hfjjknviueulhtejd961b59ogptbci.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "nU-P-10YomLU_reoQtoAb1E8"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  {
    service: "twitter"
  },
  {
    $set: {
      clientId: "dlwJQlogDgqgtBfZzemuKEydF",
      loginStyle: "popup",
      secret: "b4ZfXvtLdlaM91jtRDjW8WyxgGCK8XGCOYmWIxSYfza9J9cqm3"
    }
  }
);
