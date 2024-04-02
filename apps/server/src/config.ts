import dotenvSafe from 'dotenv-safe';
import path from 'path';

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root('.env'),
  sample: root('.env.example'),
});

export const config = {
 APP_ID_WOOVI: process.env.APP_ID_WOOVI,
 API_URL_WOOVI: process.env.API_URL_WOOVI
} 

