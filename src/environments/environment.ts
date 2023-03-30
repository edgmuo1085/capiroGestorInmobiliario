import { parametrosSelect, requisitosPropiedades, storageKeys } from './constants';

const constants = {
  ...storageKeys,
  ...parametrosSelect,
  ...requisitosPropiedades,
};

export const environment = {
  production: false,
  URL_API: `http://34.203.40.127:9099/serviciosCapiro-1/`, //pruebas desarrollo
  //URL_API: `https://arrendamientoscapiro.com/`,
  //URL_API: `http://localhost:9099/pruebas/`, //pruebas local
  ...constants,
};
