import {ApplicationConfig} from '@loopback/core';
import {IotWebClientApplication} from './application';

export {IotWebClientApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new IotWebClientApplication(options);
  await app.boot();

  // 2020-03-27 [ Auto-update database when server start ]
  // await app.migrateSchema();

  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
