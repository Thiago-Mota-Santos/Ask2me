import { errorField, successField } from '@entria/graphql-mongo-helpers';
import { mutationWithClientMutationId } from 'graphql-relay';

const UserSignOutMutation = mutationWithClientMutationId({
  name: 'UserSignOutMutation',
  inputFields: {},
  mutateAndGetPayload: async (_, ctx) => {
    
    ctx.ctx.cookies.set('token', '', { expires: new Date(0) });
    

    return {
      error: null,
      success: 'Sign Out successful',
    };
  },
  outputFields: {
    ...successField,
    ...errorField,
  },
});

export { UserSignOutMutation };
