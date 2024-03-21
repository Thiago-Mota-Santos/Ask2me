import { createLoader } from '@entria/graphql-mongo-helpers'

import { registerLoader } from '../loader/loaderRegister'
import { QuestionModel } from './questionModel'

const { Wrapper, getLoader, clearCache, load, loadAll } = createLoader({
  model: QuestionModel,
  loaderName: 'QuestionLoader',
})

export const QuestionLoader = {
  Question: Wrapper,
  getLoader,
  clearCache,
  load,
  loadAll,
}
registerLoader('QuestionLoader', getLoader)
