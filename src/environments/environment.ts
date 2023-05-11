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
  production: false,
  URL_API: `https://general2-https.ddns.net/pruebas/`,
  //URL_API: `https://general2-https.ddns.net/serviciosCapiro-1/`,
  ...constants,
  rutaImg: 'imagenes_p/',
  rutaDoc: 'documentos_p/',
  rutaImgPhp: 'imagenes_p',
  rutaDocPhp: 'documentos_p',
};
