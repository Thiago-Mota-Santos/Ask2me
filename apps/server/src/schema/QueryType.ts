import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { nodeField, nodesField } from '../node/typeRegister'
import { AppointmentConnection } from '../modules/appointment/appointmentType'
import { connectionArgs, getObjectId } from '@entria/graphql-mongo-helpers'
import { AppointmentLoader } from '../modules/appointment/appointmentLoader'
import { UserType } from '../modules/user/userType'
import { UserLoader } from '../modules/user/userLoader'
import { ProfileConnection, ProfileType } from '../modules/profile/profileType'
import { ProfileModel } from '../modules/profile/profileModel'
import { ProfileLoader } from '../modules/profile/profileLoader'
import { QuestionConnection, QuestionType } from '../modules/question/questionType'
import { QuestionModel } from '../modules/question/questionModel'
import { QuestionLoader } from '../modules/question/questionLoader'

const appointments: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLNonNull(AppointmentConnection.connectionType),
  args: { ...connectionArgs },
  resolve: async (_root, _args, context) =>
    await AppointmentLoader.loadAll(context, _args),
}

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
    const userId = user._id;
    const profile = await ProfileModel.findOne({ profileId: userId });
    return profile; 
  },
};


const question: GraphQLFieldConfig<any, any, any> = {
  type: QuestionType,
  args: { 
    profileId: { type: new GraphQLNonNull(GraphQLString)},
    ...connectionArgs
   },
  
  resolve: async (_root, { profileId }, context) => {
    const user = context.user;
    if (!user) {
      throw new Error('User not authenticated');
    }

    const id = getObjectId(profileId)
    const questions = await QuestionModel.findOne({ _id: id });
    return questions;
  }
}

const questions: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLNonNull(QuestionConnection.connectionType),
  args: { 
    ...connectionArgs
  },
  resolve: async (_root, _args, context) => {
    const user = context.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    const userId = user._id;
    
    const profile = await ProfileModel.findOne({ profileId: userId });

    if (!profile) {
      throw new Error('Profile not found');
    }

    const questions = await QuestionModel.find({ profileId: profile._id });

    const edges = questions.map(question => ({
      cursor: question._id, 
      node: question,
    }));

    return {
      edges,
    };
  }
};

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
    profile,
    profiles,
    appointments,
    question,
    questions,
    me,
  }),
})
