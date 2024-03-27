import { Question } from './../modules/question/questionModel';
import { QuestionLoader } from './../modules/question/questionLoader';
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { nodeField, nodesField } from '../node/typeRegister'
import { connectionArgs, getObjectId, withFilter } from '@entria/graphql-mongo-helpers'
import { UserType } from '../modules/user/userType'
import { UserLoader } from '../modules/user/userLoader'
import { ProfileConnection, ProfileType } from '../modules/profile/profileType'
import { ProfileModel } from '../modules/profile/profileModel'
import { ProfileLoader } from '../modules/profile/profileLoader'
import { QuestionConnection, QuestionType } from '../modules/question/questionType'
import { QuestionModel } from '../modules/question/questionModel'
import { Types } from 'mongoose'

const profiles: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLNonNull(ProfileConnection.connectionType),
  args: { ...connectionArgs },
  resolve: async (_root, _args, context) =>
    await ProfileLoader.loadAll(context, _args),
}


const profile: GraphQLFieldConfig<any, any, any> = {
  type: ProfileType,
  resolve: async (_root, _args, context) => {
    const user = context.user;
    if (!user) {
      throw new Error('User not authenticated');
    }

    const profileId = user._id; 

    if (!Types.ObjectId.isValid(profileId)) {
      throw new Error('Invalid profileId');
    }

    const profile = await ProfileModel.findOne({ profileId });
    
    if (!profile) {
      throw new Error('Profile not found');
    }

    const loadedProfile = await ProfileLoader.load(context, profile._id);
    if (!loadedProfile) {
      throw new Error('Profile not found');
    }

    return loadedProfile;
  },
};


// const profile: GraphQLFieldConfig<any, any, any> = {
//   type: ProfileType,
//   description: 'profile account',
//   args: {
//     id: {
//       type: new GraphQLNonNull(GraphQLString)
//     }
//   },
//   resolve: async (_, { id }, context) => {
//     const profile = fromGlobalId(id)
//     console.log(profile.id)
//     const profileId = new Types.ObjectId(profile.id)
//     console.log(context)
//     await ProfileLoader.load(context, profileId)
//   }
// }

const questions: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLNonNull(QuestionConnection.connectionType),
  args: { ...connectionArgs },
  resolve: async (_root, _args, context) => {
  
  const profileId = context.user._id; 

  if (!Types.ObjectId.isValid(profileId)) {
    throw new Error('Invalid profileId');
  }

  const profile = await ProfileModel.findOne({ profileId });
  
  const argsQuestion = withFilter(_args, {
      profileId: profile?._id
  });

  const loadedQuestions = await QuestionLoader.loadAll(context, argsQuestion);

    if (!loadedQuestions) {
      throw new Error('No questions found for this profile');
    }

    return loadedQuestions;
  },
};


const question: GraphQLFieldConfig<any, any, any> = {
  type: QuestionType,
  args: { 
    profileId: { type: new GraphQLNonNull(GraphQLString)},
    ...connectionArgs
   },
  
  resolve: async (_root, { profileId }, __) => {
  
    const id = getObjectId(profileId)
    const questions = await QuestionModel.findOne({ _id: id });
    return questions;
  }
}

// const questions: GraphQLFieldConfig<any, any, any> = {
//   type: new GraphQLNonNull(QuestionConnection.connectionType),
//   resolve: async (_root, _args, context) => {
//     const user = context.user;
//     if (!user) {
//       throw new Error('User not authenticated');
//     }

//     const profileId = user._id; 

//     if (!Types.ObjectId.isValid(profileId)) {
//       throw new Error('Invalid profileId');
//     }

//     const loadedQuestions = await QuestionLoader.loadAll(context, profileId);
//     console.log(loadedQuestions)
//     if (!loadedQuestions) {
//       throw new Error('No questions found for this profile');
//     }

//     return loadedQuestions;
//   },
// };

// const questions: GraphQLFieldConfig<any, any, any> = {
//   type: new GraphQLNonNull(QuestionConnection.connectionType),
//   args: { ...connectionArgs },
//   resolve: async (_root, _args, context) =>
//     await QuestionLoader.loadAll(context, _args),
// }

// const questions: GraphQLFieldConfig<any, any, any> = {
//   type: new GraphQLNonNull(QuestionConnection.connectionType),
//   args: { 
//     ...connectionArgs
//   },
//   resolve: async (_root, _args, context) => {
//     const user = context.user;
//     if (!user) {
//       throw new Error('User not authenticated');
//     }
    
//     const userId = user._id;
    
//     const profile = await ProfileModel.findOne({ profileId: userId });

//     if (!profile) {
//       throw new Error('Profile not found');
//     }

//     const questions = await QuestionModel.find({ profileId: profile._id });
     
//     const edges = questions.map(question => ({
//       cursor: question._id, 
//       node: question,
//     }));

//     return {
//       edges,
//     };
//   }
// };


const me: GraphQLFieldConfig<any, any, any> = {
  type: UserType,
  description: 'user logged',
  resolve: async (_, __, context) =>
   await UserLoader.load(context, context.user?._id),
}

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'root of all queries',
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    // profile,
    profiles,
    question,
    // profile: {
    //   type: ProfileType,
    //   args: {
    //     id: {
    //       type: new GraphQLNonNull(GraphQLString),
    //     },
    //   },
    //   resolve: async (_, { id }, ctx) => {
    //     const profile = fromGlobalId(id);
    //     console.log(profile.id)
    //      console.log(ctx?.user?._id.toString())
    //     return ProfileLoader.load(ctx, ctx?.user?._id.toString());
    //   },
    // },
    profile,
    questions,
    me,
  }),
})
