# Ask2me

 App for receiving questions 

## Run this project

Run the following command:

```sh
yarn 
```

## What's this project?

with this project it should be possible for any user to create an account and be able to receive questions

## Requirements

- [x] - It must be possible to create a question for a specific user.
- [ ] - There should be a list of questions (general) where clicking on them will lead to a specific user with the question and answer.
- [x] - There should be a list of questions (only for the recipient of the questions).
- [x] - Questions should be received in real-time.
- [ ] - Questions with the highest PIX value deposited should be prioritized and placed at the top of the queue.

## How to use? 

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:Thiago-Mota-Santos/Ask2me.git
   ```

2. Navigate to the project directory:
   ```sh
   cd Ask2me
   ```

3. Install dependencies for both web and server:
   ```sh
   yarn install
   ```
4. Fill the env variables:
   (inside apps/server)

   you don't need fill the variables:
   APP_ID_WOOVI=
   API_URL_WOOVI=
   WEBHOOK_PUBLIC_KEY
  
 ```sh
   yarn copy-env
 ```
  (inside apps/next)
  Do the same

5. Run the app:
   (in the root (/))
   ```sh
   yarn dev 
   ```

## Stack

- [x] - jest
- [ ] - sentry
- [x] - relay
- [x] - graphql
- [x] - next
- [x] - koa
- [x] - mongo db
- [x] - tailwind
- [x] - shadcn ui
----------------
deploy:

- [x] - vercel (yes, back and front) [how to deploy server apps using vercel](https://dev.to/thiagomotasantos/a-different-way-to-deploy-a-server-3oo8)


### Apps and Packages

- `next`: a [Next.js](https://nextjs.org/) using relay, tailwind, next
- `server`: a graphql server app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


