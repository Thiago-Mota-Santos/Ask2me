import 'isomorphic-fetch';
import { createSubAccount } from '../src/api/createSubAccount';

const subAccountPost = async () => {
  const payload = {
    pixKey: "a7f3a573-0414-4852-b475-474b46ae9960",
    name: "thiago"
  };
  
  try {
    const response = await createSubAccount({ payload });

    console.log('Open pix response: ', response);
    
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

(async () => {
  try {
    await subAccountPost();
  } catch (err) {
    console.log('err: ', err);
  }

  process.exit(0);
})();
