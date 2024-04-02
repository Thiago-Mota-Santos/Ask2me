import { createLoader } from '@entria/graphql-mongo-helpers'

import { registerLoader } from '../loader/loaderRegister'
import { QrCodeModel } from './qrcodeModel'

const { Wrapper, getLoader, clearCache, load, loadAll } = createLoader({
  model: QrCodeModel,
  loaderName: 'QrCodeLoader',
})

export const QrCodeLoader = {
  QrCode: Wrapper,
  getLoader,
  clearCache,
  load,
  loadAll,
}
registerLoader('QrCodeLoader', getLoader)
