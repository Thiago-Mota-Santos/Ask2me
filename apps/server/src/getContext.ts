import { Maybe } from '../../../packages/types/src'
import { getDataLoaders } from './modules/loader/loaderRegister'
import { UserDocument } from './modules/user/userModel'
import { ParameterizedContext } from 'koa'

interface ContextVars {
  ctx?: ParameterizedContext
  user: Maybe<UserDocument>
}

export const getContext = async ({ ctx, user }: ContextVars) => {
  const dataloaders = getDataLoaders()
 
  return {
    ctx,
    dataloaders,
    user,
  } as const
}
