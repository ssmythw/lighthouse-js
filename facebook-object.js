const facebookProfile = {
  name: "Scott",
  friends: 500,
  messages: ["hello", "world"],
  postMessage: function (message) {
    this.messages.push(message);
  },
  deleteMessage: function (idx) {
    this.messages.splice(idx, 1);
  },
  addFriend: function () {
    this.friends++;
  },
  removeFriend: function () {
    this.friends--;
  },
};

facebookProfile.postMessage("New message");
facebookProfile.deleteMessage(1);
console.log(facebookProfile);
