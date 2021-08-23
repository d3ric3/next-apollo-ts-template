// Allow to import .graphql files in your application
import "graphql-import-node";
// Your schema
import * as userTypeDefs from "./schemas/user.graphql";
// Another schema which is required for the merging
import * as rootTypeDefs from "./schemas/root.graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolversMap";
import { GraphQLSchema } from "graphql";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [rootTypeDefs, userTypeDefs],
  resolvers,
});

export default schema;
