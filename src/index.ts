//import { ApolloServer } from "apollo-server";

// console.log("Hello World!");
// console.log("foo bar");
// // Hot Module Replacement
// if (module.hot) {
//   module.hot.accept();
//   module.hot.dispose(() => console.log("Module disposed. "));
// }

import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";
import { Request, Response } from "express";
import { schema } from "./graphql/schema";
import { ContextRepository } from "./serverConfig/context";
mongoose.connect(
  "mongodb://192.168.0.15:42017/bhumika_demo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("Mongodb Server connected");
  }
);
const context = async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => new ContextRepository({ request, response });

const server = new GraphQLServer({
  schema,
  context,
});

const options = {
  port: 8081,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
