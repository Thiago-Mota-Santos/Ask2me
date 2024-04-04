import type { ParameterizedContext } from 'koa';
import { isWebhookAuthorizationValid } from './webhookValidateAuth';
import { webhookValidatePublicKey } from './webHookValidatePublicKey';
import { QrCodeModel, PAYMENT_STATUS } from '../../modules/qrcode/qrcodeModel';

export type WebhookPostBody = {
  charge: ChargesItem;
  pix: PixItem;
};
export type ChargesItem = {
  _id: string;
  status: string;
  customer: null;
  value: number;
  comment: string;
  createdBy: string;
  transactionID: string;
  correlationID: string;
  createdAt: string;
  updatedAt: string;
};
export type PixItem = {
  _id: string;
  charge: string;
  time: string;
  value: number;
  transactionID: string;
};

export type ErrorResponse = {
    error: string;
};

export const webhookPost = async (ctx: ParameterizedContext<{}, {}, WebhookPostBody>) => {
 
  // this make sure this call was made by OpenPix services
  if (!isWebhookAuthorizationValid(ctx)) {
    console.log('invalid authorization');
    ctx.status = 401;
    ctx.body = {
        error: 'Invalid Authorization',
    } as unknown as WebhookPostBody;
    return;
  }

  if (!webhookValidatePublicKey(ctx)) {
    console.log('invalid webhook public key');
    ctx.status = 401;
    ctx.body = {
      error: 'Invalid Webhook Public Key',
    } as unknown as WebhookPostBody;
    return;
  }

  const { pixQrCode } = ctx.request.body;

  const qrCode = await QrCodeModel.findOne({
    correlationID: pixQrCode.correlationID,
  });


  if (!qrCode) {
    ctx.body = {
      message: 'pix qrcode not valid in the body of request',
    } as unknown as WebhookPostBody;
    ctx.status = 200;
    return;
  }

  await QrCodeModel.updateOne({
      _id: qrCode._id,
    }, {
      $set: {
        status: PAYMENT_STATUS.PAIED,
      },
});

  ctx.body = {
    message: 'Valid payload!',
  } as unknown as WebhookPostBody;
  ctx.status = 200;
};
