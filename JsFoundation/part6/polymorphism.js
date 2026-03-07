// Polymorphism

class Notfication {
  send(message) {
    return `sending notification: ${message}`;
  }
}

class EmailNotification extends Notfication {
  send(message) {
    return `sending email: ${message}`;
  }
}

class SMSNotification extends Notfication {
  send(message) {
    return `sending sms: ${message}`;
  }
}

class PushNotification extends Notfication {
  send(message) {
    return `sending push notification: ${message}`;
  }
}

let notifications = [
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification(),
];

notifications.forEach((n) => {
  console.log(n.send("Server is down!"));
});