import { GraphQLContext } from '../../../graphql/context'
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import { ProfileConnection } from '../profileType'
import { Profile, ProfileModel } from '../profileModel'
import { successField } from '@entria/graphql-mongo-helpers'
import { ProfileLoader } from '../profileLoader'
import { debugConsole } from '../../../../test/debubConsole'

const profileRegisterMutation = mutationWithClientMutationId({
  name: 'ProfileRegisterMutation',
  inputFields: {
    page: { type: new GraphQLNonNull(GraphQLString) },
    pixKey: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    socialMedia: {
      type: new GraphQLInputObjectType({
        name: 'SocialMediaInput',
        fields: {
          instagram: { type: new GraphQLNonNull(GraphQLString) },
          X: { type: new GraphQLNonNull(GraphQLString) },
          twitch: { type: new GraphQLNonNull(GraphQLString) },
          youtube: { type: new GraphQLNonNull(GraphQLString) },
        },
      }),
    },
  },  

  mutateAndGetPayload: async (args: Profile, ctx) => {
    const { page, pixKey, description, socialMedia } = args
  
    if (!ctx.user) {
      throw new Error('You must be logged in')
    }

    const newProfile = await new ProfileModel({
        page,
        pixKey,
        description,
        socialMedia,
        profileId: ctx?.user?._id
    }).save()
    return {
      id: newProfile._id.toString(),
      success: 'New profile has been created',
    }
  },
  outputFields: {
    profileEdge: {
      type: ProfileConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const profile = await ProfileLoader.load(context, id)
        if (!profile) return null

        return {
          cursor: toGlobalId('Profile', profile._id),
          node: profile,
        }
      },
      ...successField,
    },
  },
})

export { profileRegisterMutation }
