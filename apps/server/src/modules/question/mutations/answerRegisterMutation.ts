import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';
import { getObjectId, successField } from '@entria/graphql-mongo-helpers';
import { QuestionConnection } from '../questionType';
import { QuestionModel } from '../questionModel';

const answerRegisterMutation = mutationWithClientMutationId({
  name: 'AnswerRegisterMutation',
  inputFields: {
    answer: { type: new GraphQLNonNull(GraphQLString) },
    profileId: { type: new GraphQLNonNull(GraphQLString) },
  },
  mutateAndGetPayload: async ({ answer, profileId, }) => {
    
    const updateQuestion = await QuestionModel.findByIdAndUpdate(
        getObjectId(profileId),
        { answer: answer },
        { new: true },
      )
    
    if(!updateQuestion){
        throw new Error("This question does not exist")
    }

    return {
      id: updateQuestion._id.toString(),
      success: 'An answer has been created'
    };
  },
  outputFields: {
    questionEdge: {
      type: QuestionConnection.edgeType,
      resolve: async ({ id }) => {
        const question = await QuestionModel.findById(id);
        if (!question) return null;

        return {
          cursor: toGlobalId('Question', question._id),
          node: question,
        };
      },
      ...successField,
    },
  },
});

export { answerRegisterMutation };
