import { parametrosSelect, requisitosPropiedades, rutasFiles, storageKeys, validacionPatterns } from './constants';

const constants = {
  ...storageKeys,
  ...parametrosSelect,
  ...requisitosPropiedades,
  ...validacionPatterns,
  ...rutasFiles,
};

export const environment = {
  production: false,
  URL_API: `https://general2-https.ddns.net/serviciosCapiro-1/`,
  ...constants,
};
