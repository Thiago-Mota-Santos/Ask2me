import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { connectionDefinitions, globalIdField } from 'graphql-relay'
import { nodeInterface, registerTypeLoader } from '../../node/typeRegister'
import { Profile } from './profileModel'
import { ProfileLoader } from './profileLoader'

export const ProfileType = new GraphQLObjectType<Profile>({
  name: 'Profile',
  description: 'Represents the user profile',
  fields: () => ({
    id: globalIdField('Profile'),
    page: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (profile) => profile.page,
    },
    pixKey: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: (profile) => profile.pixKey,   
      },
      description: {
        type: GraphQLString,
        resolve: (profile) => profile.description,
      },
      socialMedia: {
        type: new GraphQLObjectType({
          name: 'SocialMedia',
          fields: () => ({
            instagram: {
              type: GraphQLString,
              resolve: (profile) => profile.socialMedia.instagram,
            },
            whatsapp: {
              type: GraphQLString,
              resolve: (profile) => profile.socialMedia.whatsapp,
            },
            linkedin: {
              type: GraphQLString,
              resolve: (profile) => profile.socialMedia.linkedin,
            },
            X: {
              type: GraphQLString,
              resolve: (profile) => profile.socialMedia.X,
            },
            twitch: {
              type: GraphQLString,
              resolve: (profile) => profile.socialMedia.twitch,
            },
            youtube: {
              type: GraphQLString,
              resolve: (profile) => profile.socialMedia.youtube,
            },
          }),
        }),
        resolve: (profile) => profile.socialMedia,
      },
  }),
  interfaces: () => [nodeInterface],
})

export const ProfileConnection = connectionDefinitions({
  name: 'Profile',
  nodeType: ProfileType,
})

registerTypeLoader(ProfileType, ProfileLoader.load)
