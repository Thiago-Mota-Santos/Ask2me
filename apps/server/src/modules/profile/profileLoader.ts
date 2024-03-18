import { createLoader } from '@entria/graphql-mongo-helpers'

import { registerLoader } from '../loader/loaderRegister'
import { ProfileModel } from './profileModel'

const { Wrapper, getLoader, clearCache, load, loadAll } = createLoader({
  model: ProfileModel,
  loaderName: 'ProfileLoader',
})

export const ProfileLoader = {
  Profile: Wrapper,
  getLoader,
  clearCache,
  load,
  loadAll,
}
registerLoader('ProfileLoader', getLoader)
