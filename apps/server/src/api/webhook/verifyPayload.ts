import crypto from 'crypto'

export const algorithm = 'sha256';
export const signatureFormat = 'base64';

type VerifyPayloadType = {
  payload: string;
  signature: string;
}

export const verifyPayload = ({payload, signature}: VerifyPayloadType) => {
  const publicKey = Buffer.from(process.env.WEBHOOK_PUBLIC_KEY as string, 'base64').toString('utf-8');
  const verify = crypto.createVerify(algorithm);

  verify.write(Buffer.from(payload));
  verify.end();

  const isValid = verify.verify(publicKey, signature, signatureFormat);

  return isValid;
}