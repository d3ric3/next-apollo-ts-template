import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schemasMap";
import { GraphQLSchema } from "graphql";

const PORT = process.env.PORT || 4444;

const startServer = async (graphqlSchema: GraphQLSchema): Promise<void> => {
  const server = new ApolloServer({
    schema,
  });
  const app = express();
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });
  app.listen(PORT, () => {
    console.log(
      `\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`
    );
  });
};

startServer(schema);
