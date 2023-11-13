const typeDefs = `
  type Profile {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
