import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ParameterizedContext } from 'koa'
import { UserDocument, UserModel } from './modules/user/userModel'
import { Maybe } from '../../../packages/types/src'

const JWT_KEY = process.env.JWT_KEY as string

const getUser = async (
  ctx: ParameterizedContext,
): Promise<{ user: Maybe<UserDocument> }> => {

  const token = ctx.cookies.get('token');

  if (!token) {
    return { user: null };
  }

  const subToken = token?.replace('JWT ', '');

  let decodedId;
  let user;

  const verifyTokenAndFindUser = async () => {
    decodedId = jwt.verify(subToken || token, JWT_KEY) as { id: string };
    user = await UserModel.findOne({ _id: decodedId.id });
    console.log(user)
  };

  await verifyTokenAndFindUser().catch(() => {});
  return { user: user };
};

const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

export { getUser, generateJwtToken }
