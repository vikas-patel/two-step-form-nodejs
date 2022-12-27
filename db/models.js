const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/form', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

// find one user based on email
const getUserEmail = eml => User.find({ email: eml });

// create one user
const createUser = usr => User.create(usr);

module.exports = {
  getUserEmail,
  createUser,
};
