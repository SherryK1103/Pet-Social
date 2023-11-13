const db = require('../config/connection');

const petSchema = new db({
  username: {
    type: String,
    require: true,
  },

  breed: {
    type: String,
    require: true,
  },

  colorMarks: {
    type: String,
  },

},
  {
    timestamps: true,
  }
);
const User = model('User', petSchema);
module.exports = User;