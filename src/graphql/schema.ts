import { GraphQLObjectType, GraphQLSchema } from "graphql";
//import { GraphQLUserQueries } from "./user/user.queries";
//import { GraphQLUserMutations } from "./user/user.mutations";
import { GraphQLTodoQueries } from "./todo/todo.queries";
import { GraphQLTodoMutations } from "./todo/todo.mutation";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // ...GraphQLUserQueries,
    ...GraphQLTodoQueries,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    // ...GraphQLUserMutations,
    ...GraphQLTodoMutations,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  // subscription: RootSubscription
});

export { schema };
