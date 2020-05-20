const { GraphQLObjectType, GraphQLInt } = require("graphql");

// Launch Type

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
    flight_number: { type: GraphQLInt },
  }),
});
