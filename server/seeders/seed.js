const connection = require('../config/connection');
const userSeeds = require('./userSeeds.json');
// const commentSeeds = require('./commentSeeds.json');
const User = require('../models/user');

// const { getRandomName, getRandomAssignments } = require('./data');

connection.once('open', async () => {
  try {

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    await User.collection.insertMany(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
