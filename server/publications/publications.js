Meteor.publish('user', function (userId) {
  return Meteor.users.find({_id: userId}, {fields: {
    profile: 1,
    services: 1,
  }});
});