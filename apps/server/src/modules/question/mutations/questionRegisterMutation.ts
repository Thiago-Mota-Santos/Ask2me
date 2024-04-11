import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';
import { getObjectId, successField } from '@entria/graphql-mongo-helpers';
import { QuestionConnection } from '../questionType';
import { QuestionModel } from '../questionModel';
import { ProfileModel } from '../../profile/profileModel';
import crypto from 'node:crypto';
import { pixQrCodePost } from '../../../api/qrCodePost';

const questionCreateMutation = mutationWithClientMutationId({
  name: 'QuestionCreateMutation',
  inputFields: {
    text: { type: new GraphQLNonNull(GraphQLString) },
    profileId: { type: new GraphQLNonNull(GraphQLString)},
    page: { type: GraphQLString}
  },
  mutateAndGetPayload: async ({ text, profileId, page }) => {
    const uuid = crypto.randomBytes(16).toString('hex');
    const profile = await ProfileModel.findById(getObjectId(profileId));
    
    if (!profile) {
        throw new Error('Profile does not found');
    }

    const payload = {
      name: `qr code ${Math.random()}`,
      identifier: uuid.replace(/-/g, '').slice(0, 25),
      correlationID: uuid,
    };

    const response = await pixQrCodePost({ payload });
    
    const newQuestion = await new QuestionModel({
      page,
      text,
      profileId: profile._id, 
    }).save();

    return {
      id: newQuestion._id.toString(),
      success: 'Question has been created'
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

export { questionCreateMutation };
