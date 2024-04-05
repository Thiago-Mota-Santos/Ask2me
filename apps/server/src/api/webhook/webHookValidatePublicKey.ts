import type { Context } from 'koa';
import { verifyPayload } from './verifyPayload';

export const webhookValidatePublicKey = (ctx: Context) => {
  const webhookSignatureHeader = ctx.headers['x-webhook-signature'];
  const body = ctx.request.body;

  if (!webhookSignatureHeader) {
    console.log('missing x-webhook-signature header');
    return false;
  }

  return verifyPayload({payload: JSON.stringify(body), signature: webhookSignatureHeader as string});
}