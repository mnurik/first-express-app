import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/UserType';

const typeDefs = [User];

export default mergeTypes(typeDefs, { all: true });
