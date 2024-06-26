import Koa, { ParameterizedContext, Request, Response } from 'koa'
import logger from 'koa-logger'
import cors from 'kcors'
import bodyParser from 'koa-bodyparser'
import { OptionsData, graphqlHTTP } from 'koa-graphql'
import koaPlayground from 'graphql-playground-middleware-koa'
import Router from '@koa/router'
import { getUser } from './auth'
import { getContext } from './getContext'
import { schema } from './schema/schema'
import { webhookPost } from './api/webhook/webhookPost'

const router = new Router()
const app = new Koa()

app.use(bodyParser())

const graphQlSettingsPerReq = async (
  _req: Request,
  _res: Response,
  ctx: ParameterizedContext,
): Promise<OptionsData> => {
  const { user } = await getUser(ctx)
  console.log(await getContext({
    ctx,
    user,
  }))

  return {
    graphiql: true,
    schema,
    pretty: true,
    
    context: await getContext({
      ctx,
      user,
    }),
   
    customFormatErrorFn: ({ message, locations, stack }) => {
      /* eslint-disable no-console */
      console.log(message)
      console.log(locations)
      console.log(stack)
      /* eslint-enable no-console */

      return {
        message,
        locations,
        stack,
      }
    },
  }
}

const graphQlServer = graphqlHTTP(graphQlSettingsPerReq)

router.all('/graphql', graphQlServer)
router.all(
  '/',
  koaPlayground({
    endpoint: '/',
  }),
)

router.post('/webhook', webhookPost);

app.use(cors({ credentials: true }))
app.use(logger())

app.use(router.routes()).use(router.allowedMethods())

export { app }
