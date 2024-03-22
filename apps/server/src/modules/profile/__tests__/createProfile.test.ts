import { clearDatabaseAndRestartCounters } from '../../../../test/clearDatabase'
import { mongooseConnection } from '../../../../test/mongooseConnection'
import { mongooseDisconnect } from '../../../../test/mongooseDisconnect'
import { schema } from '../../../schema/schema'
import { getContext } from '../../../getContext'
import { createUser } from '../../user/fixture/createUser'
import { ProfileMutationResult } from '../../../../test/InterfaceTest'
import { getGraphqlResult } from '../../../../test/getGraphqlResult'
import { createProfile } from '../fixture/createProfile'

beforeAll(mongooseConnection)
beforeEach(clearDatabaseAndRestartCounters)
afterAll(mongooseDisconnect)

it('should be able create an user profile', async () => {
  const user = await createUser()
  const { page, description, pixKey, socialMedia } =
    await createProfile({
      page: 'xx',
      pixKey: "31314104194184184818481481",
      description: "Responderei qualquer pergunta",
      socialMedia: {
      instagram: "thiagoinsta@313",
      linkedin: "thiago_dev",
      X: "Teaga014",
      twitch: "thiagodev",
      youtube: "thiagodev"
  }
    })

  const mutation = `
    mutation profile(
        $page: String!,
        $pixKey: String!,
        $description: String!,
        $socialMedia: SocialMediaInput!,
    ) {            
        profileRegisterMutation(input: {
        page: $page,
        pixKey: $pixKey,
        description: $description,
        socialMedia: $socialMedia
        }) {
        profileEdge {
            node {
            page
            pixKey
            description
            socialMedia {
                instagram
                linkedin
                X
                twitch
                youtube
            }
            }
        }
        }
    }
  `

  const variableValues = {
    page,
    pixKey,
    description,
    socialMedia,
  }

  const result = await getGraphqlResult<ProfileMutationResult>({
    schema,
    source: mutation,
    variableValues,
    contextValue: getContext({ user }),
  })

  expect(result.errors).toBeUndefined()

  const { profileEdge } = result?.data?.profileRegisterMutation!;
  expect(profileEdge.node.page).toBe(variableValues.page);
  expect(profileEdge.node.pixKey).toBe(variableValues.pixKey);
  expect(profileEdge.node.description).toBe(variableValues.description);

  expect(profileEdge.node.socialMedia.instagram).toBe(variableValues.socialMedia.instagram);
  expect(profileEdge.node.socialMedia.linkedin).toBe(variableValues.socialMedia.linkedin);
  expect(profileEdge.node.socialMedia.X).toBe(variableValues.socialMedia.X);
  expect(profileEdge.node.socialMedia.twitch).toBe(variableValues.socialMedia.twitch);
  expect(profileEdge.node.socialMedia.youtube).toBe(variableValues.socialMedia.youtube);
  
})
