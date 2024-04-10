import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { successField } from '@entria/graphql-mongo-helpers'
import { generateJwtToken, setCookie } from '../../../auth'
import { UserModel } from '../userModel'
import { UserType } from '../userType'
import { UserLoader } from '../userLoader'
import { GraphQLContext } from '../../../graphql/context'

const userRegisterMutation = mutationWithClientMutationId({
  name: 'UserRegister',
  description: 'Register a new user',
  inputFields: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },

  mutateAndGetPayload: async ({ username, email, password, ...rest }, { ctx }: GraphQLContext) => {
    const hasUser =
      (await UserModel.countDocuments({ email: email.trim() })) > 0

    if (hasUser) {
      throw new Error('This user already exists')
    }

    const user = await new UserModel({
      username,
      email,
      password,
      ...rest,
    }).save()

    const token = generateJwtToken(user)
    setCookie(ctx, user) 


    return {
      token,
      id: user._id,
      success: 'User registered',
    }
  },
  outputFields: {
    me: {
      type: UserType,
      resolve: async ({ id }, _, context) => {
        return UserLoader.load(context, id)
      },
    },
    // token: {
    //   type: GraphQLString,
    //   resolve: ({ token }) => token,
    // },
    ...successField,
  },
})

export { userRegisterMutation }
