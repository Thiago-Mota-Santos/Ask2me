import type { Context } from 'koa';
import { config } from '../../config';

export const isWebhookAuthorizationValid = (ctx: Context) => {
  console.log(ctx.headers.authorization)
  return ctx.headers.authorization === config.WEBHOOK_SECRET;
}