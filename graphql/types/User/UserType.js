export default `
  type User {
    _id: String!
    name: Name!
    login: String!
    password: String!
  }

  type Name {
    first: String!
    last: String!
  }

  input NameInput {
    first: String!
    last: String!
  }
  
  type Query {
    user(_id: String, login: String): User
    users: [User]
  }
  
  type Mutation {
    addUser(name: NameInput!, login: String!, password: String!): User
    editUser(_id: String!, name: NameInput, password: String): User
    deleteUser(_id: String): User
  }
`;
