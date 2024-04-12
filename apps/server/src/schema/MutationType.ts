import { GraphQLObjectType } from 'graphql'

import * as UserLogin from '../modules/user/mutations/UserLoginMutation'
import * as UserRegister from '../modules/user/mutations/UserRegisterMutation'
import * as UserSignOutMutation from "../modules/user/mutations/UserSignOutMutation"
import * as ProfileRegisterMutation from '../modules/profile/mutations/profileRegisterMutation'
import * as QuestionRegisterMutation from '../modules/question/mutations/questionRegisterMutation'
import * as AnswerRegisterMutation from '../modules/question/mutations/answerRegisterMutation'
import * as QrCodeRegisterMutation from '../modules/qrcode/mutations/QrCodeRegisterMutation'


export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root of mutations',
  fields: () => ({
    ...UserLogin,
    ...UserRegister,
    ...UserSignOutMutation,
    ...ProfileRegisterMutation,
    ...QuestionRegisterMutation,
    ...AnswerRegisterMutation,
    ...QrCodeRegisterMutation
  }),
})
