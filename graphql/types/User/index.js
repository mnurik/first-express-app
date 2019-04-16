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
    user(id: String!): User
    users: [User]
  }
  
  type Mutation {
    addUser(id: String!, name: NameInput!, login: String!, password: String!): User
    editUser(id: String, name: NameInput, login: String, password: String): User
    deleteUser(id: String): User
  }
`;
