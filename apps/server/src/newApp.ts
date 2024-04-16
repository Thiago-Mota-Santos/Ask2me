import 'isomorphic-fetch';
import Koa, { Context } from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';
import koaPlayground from 'graphql-playground-middleware-koa';

import { getGraphQLParameters, processRequest, renderGraphiQL, sendResult, shouldRenderGraphiQL } from 'graphql-helix';

import { schema } from './schema/schema';
import { getUser } from './auth';
import { getContext } from './getContext';

const router = new Router();

const app = new Koa();

app.use(bodyParser());

app.on('error', err => {
  // eslint-disable-next-line
  console.log('app error: ', err);
});

app.use(logger());
app.use(cors({ credentials: true}));

router.all(
  '/graphiql',
  koaPlayground({
    endpoint: '/graphql',
  }),
);

router.all('/graphql', async ctx => {
  const { user } = await getUser(ctx);
 
  console.log("start : ", user)

  const request = {
    body: ctx.request.body,
    headers: ctx.req.headers,
    method: ctx.request.method,
    query: ctx.request.query,
  };

  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL({});
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
      contextFactory: () => {
        return getContext({
          ctx,
          user
        });
      },
    });

    console.log(result)

    ctx.respond = false;
    sendResult(result, ctx.res);
  }
});

app.use(router.routes()).use(router.allowedMethods());

export default app