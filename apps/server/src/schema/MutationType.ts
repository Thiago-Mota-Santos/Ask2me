import { GraphQLObjectType } from 'graphql'

import * as UserLogin from '../modules/user/mutations/UserLoginMutation'
import * as UserRegister from '../modules/user/mutations/UserRegisterMutation'
import * as AppointmentRegisterMutation from '../modules/appointment/mutations/AppointmentRegisterMutation'
import * as AppointmentDelete from '../modules/appointment/mutations/AppointmentDelete'
import * as AppointmentUpdate from '../modules/appointment/mutations/AppointmentUpdate'

export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root of mutations',
  fields: () => ({
    ...UserLogin,
    ...UserRegister,
    ...AppointmentRegisterMutation,
    ...AppointmentDelete,
    ...AppointmentUpdate,
  }),
})
