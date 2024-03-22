import { clearDatabaseAndRestartCounters } from '../../../../test/clearDatabase'
import { mongooseConnection } from '../../../../test/mongooseConnection'
import { mongooseDisconnect } from '../../../../test/mongooseDisconnect'
import { schema } from '../../../schema/schema'
import { getContext } from '../../../getContext'
import { createUser } from '../../user/fixture/createUser'
import { QuestionMutationResult } from '../../../../test/InterfaceTest'
import { getGraphqlResult } from '../../../../test/getGraphqlResult'
import { createQuestion } from '../fixtures/createQuestion'

beforeAll(mongooseConnection)
beforeEach(clearDatabaseAndRestartCounters)
afterAll(mongooseDisconnect)

it('should be able create a question', async () => {
  const user = await createUser()
  const { page, text, profileId } =
    await createQuestion({
      page: 'thiago',
      text: 'Do you like play videogames?',
    })

const mutation = `
    mutation createQuestionMutation($text: String!, $profileId: String!, $page: String!) {
      questionCreateMutation(input: { text: $text, profileId: $profileId, page: $page }) {
        questionEdge {
          node {
            id
            text
            page
          }
        }
      }
    }
`;

  const variableValues = {
    page,
    text,
    profileId
  }

  const result = await getGraphqlResult<QuestionMutationResult>({
    schema,
    source: mutation,
    variableValues,
    contextValue: getContext({ user }),
  })
  expect(result.errors).toBeUndefined()

  const { questionEdge } = result?.data?.questionCreateMutation!;
  expect(questionEdge.node.text).toBe(variableValues.text);
  expect(questionEdge.node.page).toBe(variableValues.page);
  
})
