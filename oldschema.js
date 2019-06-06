// const graphql = require('graphql');
// const User = require('./models/user')
// // const _ = require('lodash');

// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLSchema,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLList,
//   GraphQLNonNull
// } = graphql;
// //book
// const UserType = new GraphQLObjectType({
//   name: 'User',
//   fields: () => ({
//     displayName: { type: GraphQLString },
//     googleid: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     gender: { type: GraphQLString },
//     movies: {
//       type: new GraphQLList(MovieType),
//       resolve(parent, args) {
//         return User.find({ title: parent.movie })
//       }}
//     })
// });

// const MovieType = new GraphQLObjectType({
//     name: 'Movie',
//     fields: () => ({
//         title: { type: GraphQLString},
//         users: {
//           type: new GraphQLList(UserType),
//           resolve(parent, args) {
//             return User.find({ _id: parent.movie })
//           }
//         }
//     })
// });

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     movie: {
//       type: new GraphQLList(UserType),
//       args: { _id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return User.aggregate([{ $match: { _id: args._id }, $project: { movies: 1 } }]);
//       }
//     },
//     user: {
//       type: UserType,
//       args: { _id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return User.findById(args._id);
//       }
//     },
//     movies: {
//         type: new GraphQLList(MovieType),
//         resolve(parent, args){
//             return Movies.find({});
//         }
//     },
//     Users: {
//       type: new GraphQLList(UserType),
//       resolve(parent, args) {
//         return Users.find({});
//       }
//     }
//   }
// });

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addUser: {
//       type: UserType,
//       args: {
//         _id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         age: { type: GraphQLInt }
//       },
//       resolve(parent, args) {
//         let user = new User({
//           _id: { type: GraphQLID },
//           gender: args.gender,
//           age: args.age
//         });
//         return user.save();
//       }
//     },
//     addMovies: {
//       type: UserType,
//       args: {
//         title: { type: new GraphQLNonNull(GraphQLString) }
//       },
//       resolve(parent, args) {
//         let movie = new Movie({
//           title: args.title
//         });
//         return title.save();
//       }
//     }
//   }
// });

// module.exports = new GraphQLSchema({
//   query: RootQuery,
//   mutation: Mutation
// });



// // db.getCollection('users').aggregate
// // ([
// // {
// //        $match: {
// //          _id: ObjectId("5cf7e09f7e995835f8718234")
// //        }
// //      },
// // { $project: {movies: 1}}])