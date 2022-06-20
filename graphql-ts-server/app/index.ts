import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import Resolvers from "./resolvers/Resolvers";
import Schema from "./schemas/Schema";

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(Schema, Resolvers);
