import { parametrosSelect, requisitosPropiedades, storageKeys, validacionPatterns } from './constants';

const constants = {
  ...storageKeys,
  ...parametrosSelect,
  ...requisitosPropiedades,
  ...validacionPatterns,
};

export const environment = {
  production: false,
  URL_API: `https://general2-https.ddns.net/serviciosCapiro-1/`,
  ...constants,
};
