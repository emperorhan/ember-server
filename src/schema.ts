import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: any[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: any[] = fileLoader(
    // resolvers.*로 해야지 추후 typescript -> javascript 했을 시 resolvers.js도 처리할 수 있다.
    path.join(__dirname, "./api/**/*.resolvers.*")
);

const typeDefs: any = mergeTypes(allTypes);
const resolvers: any = mergeResolvers(allResolvers);

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
