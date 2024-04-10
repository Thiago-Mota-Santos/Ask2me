import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { successField } from '@entria/graphql-mongo-helpers'
import { generateJwtToken, setCookie } from '../../../auth'
import { UserLoader } from '../userLoader'
import { UserModel } from '../userModel'
import { UserType } from '../userType'
import { GraphQLContext } from '../../../graphql/context'

interface UserLogin {
  email: string
  password: string
}

const userLoginMutation = mutationWithClientMutationId({
  name: 'UserLoginMutation',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: UserLogin, { ctx }: GraphQLContext) => {
    const { email, password } = {
      password: args.password.trim(),
      email: args.email.trim().toLowerCase(),
    }

    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error('User not found!')
    }

    const passwordIsCorrect = user.authenticate(password)

    if (!passwordIsCorrect) {
      throw new Error('Password is incorrect!')
    }
    
    setCookie(ctx, user)
    
    return {
      id: user._id,
      success: 'Login In successfully',
    }
  },
  outputFields: {
    // token: {
    //   type: GraphQLString,
    //   resolve: ({ token }) => token,
    // },
    me: {
      type: UserType,
      resolve: async ({ id }, _, context) => {
        return UserLoader.load(context, id)
      },
    },
    ...successField,
  },
})

export { userLoginMutation }
