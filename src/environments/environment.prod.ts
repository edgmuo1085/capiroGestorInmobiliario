import {
  parametrosSelect,
  requisitosPropiedades,
  nombresDocumentosAvaluoHipoteca,
  storageKeys,
  validacionPatterns,
  parametrosInmuebles,
} from './constants';

const constants = {
  ...storageKeys,
  ...parametrosSelect,
  ...requisitosPropiedades,
  ...validacionPatterns,
  ...parametrosInmuebles,
  ...nombresDocumentosAvaluoHipoteca,
};

export const environment = {
  production: true,
  URL_API: `https://general2-https.ddns.net/serviciosCapiro-1/`,
  ...constants,
  rutaImg: 'imagenes/',
  rutaDoc: 'documentos/',
  rutaImgPhp: 'imagenes',
  rutaDocPhp: 'documentos',
};
