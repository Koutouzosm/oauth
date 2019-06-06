const graphql = require('graphql');
const User = require('./models/user')
const Movie = require('./models/movies')


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    // _id: { type: GraphQLID},
    _id: { type: GraphQLID },
    displayName: { type: GraphQLString },
    googleid: { type: GraphQLID },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    movies: { 
      type: MovieType,
      resolve(parent, args){
        return Movie.findById({unique: parent._id})
      }
     }
    
    })
});

//above the join occurs. mongos unique id needs to be passed from the user collection to the movie collection as a unique key or identifier. the movietype can then be passed in as GraphQLList(MovieType) and resolved on it's on so that the movies are listed as a sub object of the larger user object. Refer to netninja graphql video 12++. 
const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    movie: { type: GraphQLString },
    unique: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name:"RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { _id: { type: GraphQLID }},
      resolve(parent, args){
        return User.findById({ _id: args._id})
      }
    },
    movie: {
      type: MovieType,
      args: {unique: { type:GraphQLString }},
      resolve(parent, args){
        return Movie.filter({ unique: args.unique })
      }
    }
  }
})

module.exports= new GraphQLSchema({
  query: RootQuery
})