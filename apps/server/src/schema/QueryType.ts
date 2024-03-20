import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { nodeField, nodesField } from '../node/typeRegister'
import { AppointmentConnection } from '../modules/appointment/appointmentType'
import { connectionArgs } from '@entria/graphql-mongo-helpers'
import { AppointmentLoader } from '../modules/appointment/appointmentLoader'
import { UserType } from '../modules/user/userType'
import { UserLoader } from '../modules/user/userLoader'
import { ProfileType } from '../modules/profile/profileType'
import { ProfileModel } from '../modules/profile/profileModel'

const appointments: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLNonNull(AppointmentConnection.connectionType),
  args: { ...connectionArgs },
  resolve: async (_root, _args, context) =>
    await AppointmentLoader.loadAll(context, _args),
}

const profile: GraphQLFieldConfig<any, any, any> = {
  type: ProfileType,
  resolve: async (_root, _args, context) => {
    
    const userId = context.user?._id;
    if (!userId) {
      throw new Error('User not authenticated');
    }

    const profile = await ProfileModel.findOne({ profileId: userId });
    console.log(profile)
    return profile; 
  },
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
    appointments,
    me,
  }),
})
