import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { connectionDefinitions, globalIdField } from 'graphql-relay'
import { nodeInterface, registerTypeLoader } from '../../node/typeRegister'
import { Profile, ProfileModel } from './profileModel'
import { ProfileLoader } from './profileLoader'
import { QuestionConnection } from '../question/questionType'
import { connectionArgs } from '@entria/graphql-mongo-helpers'
import { QuestionLoader } from '../question/questionLoader'

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
              type: new GraphQLNonNull(GraphQLString),
            },
            X: {
              type: new GraphQLNonNull(GraphQLString),
            },
            twitch: {
              type: new GraphQLNonNull(GraphQLString),
            },
            youtube: {
              type: new GraphQLNonNull(GraphQLString),
            },
          }),
        }),
      },
  questions: {
    type: new GraphQLNonNull(QuestionConnection.connectionType),
    args: { ...connectionArgs },
    resolve: async (_root, _args, context) =>
      await QuestionLoader.loadAll(context, _args),
    }
}),
  interfaces: () => [nodeInterface],
})


export const ProfileConnection = connectionDefinitions({
  name: 'Profile',
  nodeType: ProfileType,
})

registerTypeLoader(ProfileType, ProfileLoader.load)
