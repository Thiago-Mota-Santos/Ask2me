import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { connectionDefinitions, globalIdField } from 'graphql-relay'
import { nodeInterface, registerTypeLoader } from '../../node/typeRegister'
import { Question } from './questionModel'
import { QuestionLoader } from './questionLoader'

export const QuestionType = new GraphQLObjectType<Question>({
  name: 'Question',
  description: 'Represents a question asked',
  fields: () => ({
    id: globalIdField('Question'),
    text: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (question) => question.text,
    },
    answer: {
      type: GraphQLString,
      resolve: (question) => question.answer, 
    },
    page: {
      type: GraphQLString,
      resolve: (question) => question.page
    }
  }),
  interfaces: () => [nodeInterface],
})


export const QuestionConnection = connectionDefinitions({
  name: 'Question',
  nodeType: QuestionType,
})

registerTypeLoader(QuestionType, QuestionLoader.load)
