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
  URL_API: `https://general2-https.ddns.net/pruebas/`,
  ...constants,
  rutaImg: 'imagenes_p/',
  rutaDoc: 'documentos_p/',
  rutaImgPhp: 'imagenes_p',
  rutaDocPhp: 'documentos_p',
};
