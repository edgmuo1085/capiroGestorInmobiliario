import { storageKeys } from './constants';

const constants = {
  ...storageKeys,
};

export const environment = {
  production: true,
  URL_API: `http://54.196.245.80:9099/serviciosCapiro-1/`, //pruebas desarrollo
  //URL_API: `https://arrendamientoscapiro.com/`,
  //URL_API: `http://localhost:9099/pruebas/`, //pruebas local
  ...constants,
};
