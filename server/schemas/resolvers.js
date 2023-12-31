const User = require('../models/user');
const { signToken, AuthenticationError } = require('../utils/auth');
// const { } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      console.log(email, password);
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Not logged in');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Not logged in');
      }
      const token = signToken(user);
      return { token, user };
    },

  },
};

module.exports = resolvers;












// const { Profile } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');

// const resolvers = {
//   Query: {
//     profiles: async () => {
//       return Profile.find();
//     },

//     profile: async (parent, { profileId }) => {
//       return Profile.findOne({ _id: profileId });
//     },
//   },

//   Mutation: {
//     addProfile: async (parent, { name, email, password }) => {
//       const profile = await Profile.create({ name, email, password });
//       const token = signToken(profile);

//       return { token, profile };
//     },
//     login: async (parent, { email, password }) => {
//       const profile = await Profile.findOne({ email });

//       if (!profile) {
//         throw AuthenticationError;
//       }

//       const correctPw = await profile.isCorrectPassword(password);

//       if (!correctPw) {
//         throw AuthenticationError;
//       }

//       const token = signToken(profile);
//       return { token, profile };
//     },

//     addSkill: async (parent, { profileId, skill }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         {
//           $addToSet: { skills: skill },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeProfile: async (parent, { profileId }) => {
//       return Profile.findOneAndDelete({ _id: profileId });
//     },
//     removeSkill: async (parent, { profileId, skill }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         { $pull: { skills: skill } },
//         { new: true }
//       );
//     },
//   },
// };

// module.exports = resolvers;