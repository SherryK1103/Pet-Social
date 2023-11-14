const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;


// taken from profile.js model
// set up pre-save middleware to create password
// profileSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// profileSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// const Profile = model('Profile', profileSchema);

// module.exports = Profile;





// const db = require('../config/connection');
// const { Schema, model } = require('mongoose');

// const petSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   breed: {
//     type: String,
//     required: true,
//   },
//   colorMarks: {
//     type: String,
//   },
// }, {
//   timestamps: true,
// });

// const Pet = model('Pet', petSchema);
// module.exports = Pet;


// duplicate profile.js model code
// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const profileSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+@.+\..+/, 'Must match an email address!'],
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 5,
//   },
// });

// // set up pre-save middleware to create password
// profileSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// profileSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// const Profile = model('Profile', profileSchema);

// module.exports = Profile;