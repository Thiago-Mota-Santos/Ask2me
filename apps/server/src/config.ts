import dotenvSafe from 'dotenv-safe';
import path from 'path';

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root('.env'),
  sample: root('.env.example'),
});

export const config = {
    MONGO_URI: process.env.MONGO_URI as string,
    JWT_KEY: process.env.JWT_KEY as string,
    APP_ID_WOOVI: process.env.APP_ID_WOOVI as string,
    API_URL_WOOVI: process.env.API_URL_WOOVI as string,
    PORT: process.env.PORT as string,
    WEBHOOK_PUBLIC_KEY: process.env.WEBHOOK_PUBLIC_KEY as string
 } as const
 
