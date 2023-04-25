import { parametrosSelect, requisitosPropiedades, nombresDocumentosAvaluoHipoteca, storageKeys, validacionPatterns } from './constants';

const constants = {
  ...storageKeys,
  ...parametrosSelect,
  ...requisitosPropiedades,
  ...validacionPatterns,
  ...nombresDocumentosAvaluoHipoteca,
};

export const environment = {
  production: false,
  URL_API: `https://general2-https.ddns.net/serviciosCapiro-1/`,
  ...constants,
  rutaImg: 'imagenes',
  rutaDoc: 'documentos',
};
