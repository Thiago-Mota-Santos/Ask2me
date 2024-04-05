import 'dotenv/config'

import type { Context } from 'koa';

export const isWebhookAuthorizationValid = (ctx: Context) => {
  console.log(ctx.headers.authorization)
  return ctx.headers.authorization === process.env.WEBHOOK_SECRET;
}