const db = require('../config/connection');
const userSeeds = require('./userSeeds.json');
const commentSeeds = require('./commentSeeds.json');
const petDB = require('./petDB');
const User = require('../models/user');

db.once('open', async () => {
  try {
    // await petDB('Thought', 'thoughts');
    await petDB(User, 'users');
    await User.create(userSeeds);

    for (let i = 0; i < commentSeeds.length; i++) {
      const { _id, commentAuthor } = await comment.create(commentSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: commentAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
