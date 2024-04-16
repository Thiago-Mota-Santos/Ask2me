import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ParameterizedContext } from 'koa'
import { UserDocument, UserModel } from './modules/user/userModel'
import { Maybe } from '../../../packages/types/src'
import { debugConsole } from '../test/debubConsole'

const JWT_KEY = process.env.JWT_KEY as string

const getUser = async (
  ctx: ParameterizedContext,
): Promise<{ user: Maybe<UserDocument> }> => {

  const token = ctx.cookies.get('token')
  try {
    if (!token) {
      return { user: null }
    }
    const subToken = token?.replace('JWT ', '')
    console.log(subToken)
    const decodedToken = jwt.verify(subToken!, JWT_KEY)
    const decodedId = decodedToken as { id: string }
    console.log("decoded token: ", decodedId)
    const user = await UserModel.findOne({ _id: decodedId.id })
    console.log("User before return : ", user)
    return { user }
  } catch (err) {
    console.log("catch has triggered")
    console.log(err)
    return { user: null }
  }
}

const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

export { getUser, generateJwtToken }
