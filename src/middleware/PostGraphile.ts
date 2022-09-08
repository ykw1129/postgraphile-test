import postgraphile,{PostGraphileOptions} from "postgraphile";
const postgraphileOptions:PostGraphileOptions = {
  subscriptions: true,
  watchPg: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  showErrorStack: "json",
  extendedErrors: ["hint", "detail", "errcode"],
  appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
  exportGqlSchemaPath: "schema.graphql",
  graphiql: true,
  enhanceGraphiql: true,
  simpleCollections:'only',
  allowExplain(req) {
    // TODO: customise condition!
    return true;
  },
  enableQueryBatching: true,
  legacyRelations: "omit",
};
 export const  postGraphileMiddleware =  postgraphile(
    process.env.DB_CONNECT_URL,
    "public",
    postgraphileOptions
  )