import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { nodeField, nodesField } from '../node/typeRegister'
import { AppointmentConnection } from '../modules/appointment/AppointmentType'
import { connectionArgs } from '@entria/graphql-mongo-helpers'
import { AppointmentLoader } from '../modules/appointment/AppointmentLoader'
import { UserType } from '../modules/user/UserType'
import { UserLoader } from '../modules/user/UserLoader'

const appointments: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLNonNull(AppointmentConnection.connectionType),
  args: { ...connectionArgs },
  resolve: async (_root, _args, context) =>
    await AppointmentLoader.loadAll(context, _args),
}

const me: GraphQLFieldConfig<any, any, any> = {
  type: UserType,
  description: 'user logged',
  resolve: async (_root, _args, context) =>
    await UserLoader.loadAll(context, context.user?._id),
}

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'root of all queries',
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    appointments,
    me,
  }),
})
