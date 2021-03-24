import { func } from './dummy';

require('dotenv').config();

export const hogehoge = (params: { q: string }) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: params.q,
      env: process.env.FIREBASE_DATABASE,
    }),
  };
};

export const post = (params: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: func(params) }),
  };
};
