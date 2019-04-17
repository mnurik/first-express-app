import { mergeResolvers } from 'merge-graphql-schemas';

import User from './User/UserResolver';

const resolvers = [User];

export default mergeResolvers(resolvers);
