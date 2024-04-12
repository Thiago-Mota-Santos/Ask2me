import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { GraphQLContext } from "../graphql/context"
import { User } from '../modules/user/userModel';
import { getObjectId } from '@entria/graphql-mongo-helpers';
import { Context, ParameterizedContext } from 'koa';

// 1 year
// eslint-disable-next-line
const maxAge = 365 * 24 * 60 * 60 * 100;

export const setSessionTokenCookie = async (
  ctx: ParameterizedContext,
  COOKIE_NAME: string,
  token: string | null,
) => {
  const domain = process.env.NODE_ENV === 'production' ? 'ask2me-next.vercel.app' : undefined;
  try {
    const options = {
      domain,
      httpOnly: true,
      secure: ctx.secure,
      sameSite: true,
      path: '/',
      maxAge,
    };

    ctx.ctx.cookies.set(COOKIE_NAME, token, options);
  } catch (err) {
    // eslint-disable-next-line
    console.log('set cookie failed: ', err);

  }
};

export const generateUserToken = (model: User) =>
  jwt.sign({id: getObjectId(model)?.toString()},process.env.JWT_KEY as string);

