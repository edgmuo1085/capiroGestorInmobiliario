import { parametrosSelect, requisitosPropiedades, storageKeys } from './constants';

const constants = {
  ...storageKeys,
  ...parametrosSelect,
  ...requisitosPropiedades,
};

export const environment = {
  production: true,
  URL_API: `https://44.214.189.34:8443/serviciosCapiro-1/`, //pruebas desarrollo
  ///URL_API: `https://arrendamientoscapiro.com/`,
  //URL_API: `http://localhost:9099/pruebas/`, //pruebas local
  ...constants,
};
