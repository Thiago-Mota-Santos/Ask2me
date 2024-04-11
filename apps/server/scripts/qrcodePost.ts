import 'isomorphic-fetch';
import crypto from 'node:crypto';
import { pixQrCodePost } from '../src/api/qrCodePost';

const qrCodePostRun = async () => {
  const uuid = crypto.randomBytes(16).toString('hex');
  
  const payload = {
    name: `qr code ${Math.random()}`,
    identifier: uuid.replace(/-/g, '').slice(0, 25),
    correlationID: uuid,
    value: 10
  };
  
  try {
    const response = await pixQrCodePost({ payload });
    
    console.log('Open pix response: ', response);
    
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

(async () => {
  try {
    await qrCodePostRun();
  } catch (err) {
    console.log('err: ', err);
  }

  process.exit(0);
})();
