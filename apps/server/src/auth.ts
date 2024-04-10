import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ParameterizedContext } from 'koa'
import { UserDocument, UserModel } from './modules/user/userModel'
import { Maybe } from '../../../packages/types/src/Maybe'

const JWT_KEY = process.env.JWT_KEY as string

const getUser = async (
  ctx: ParameterizedContext,
): Promise<{ user: Maybe<UserDocument> }> => {
  const token = ctx.cookies.get('token')
  console.log(token)
  try {
    if (!token) return { user: null }
    const subToken = token.replace('JWT%20', '')
    const decodedToken = jwt.verify(subToken, JWT_KEY)
    const decodedId = decodedToken as { id: string }
    const user = await UserModel.findOne({ _id: decodedId.id })
    return { user }
  } catch (err) {
    return { user: null }
  }
}

const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

const setCookie = (ctx: ParameterizedContext, user: UserDocument) => {
  ctx.cookies.set(JWT_KEY, generateJwtToken(user), {
    sameSite: 'lax',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
    signed: false,
  });
}

export { getUser, generateJwtToken, setCookie }
