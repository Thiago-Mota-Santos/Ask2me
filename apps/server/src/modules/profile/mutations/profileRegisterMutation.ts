import { GraphQLContext } from '../../../graphql/context'
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import { ProfileType } from '../profileType'
import { Profile, ProfileModel } from '../profileModel'
import { successField } from '@entria/graphql-mongo-helpers'
import { ProfileLoader } from '../profileLoader'

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
          instagram: { type: GraphQLString },
          whatsapp: { type: GraphQLString },
          linkedin: { type: GraphQLString },
          X: { type: GraphQLString },
          twitch: { type: GraphQLString },
          youtube: { type: GraphQLString },
        },
      }),
    },
  },  

  mutateAndGetPayload: async (args: Profile, ctx: GraphQLContext) => {
    const { page, pixKey, description, socialMedia } = args

    if (!ctx.user) {
      throw new Error('You must be logged in')
    }

    const newProfile = await new ProfileModel({
        page,
        pixKey,
        description,
        socialMedia,
        profileId: ctx.user._id
    }).save()
    return {
      id: newProfile._id.toString(),
      success: 'New profile has been created',
    }
  },
  outputFields: {
    profile: {
      type: ProfileType,
      resolve: async ({ id }, _, context) => {
        return ProfileLoader.load(context, id);
      },
    },
    ...successField,
  },
})

export { profileRegisterMutation }
