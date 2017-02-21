'use strict';

module.exports = function(app) {
  var User = app.models.User;

  User.create({
    username: 'foo',
    email: 'foo@bar.com',
    password: 'changeme'
  }, (err, user) => {
    if (err) {
      throw err;
    }

    console.log('sample user created\n', JSON.stringify(user, null, '  '));

    user.email = 'bar@foo.com';
    user.save((saveErr, saveUser) => {
      if (saveErr) {
        throw saveErr;
      }
      console.log('sample user saved\n', JSON.stringify(saveUser, null, '  '));
    });

  });
};
