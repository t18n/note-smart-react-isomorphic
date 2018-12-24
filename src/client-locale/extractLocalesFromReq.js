import accepts from 'accepts';
import { LOCALE_COOKIE_NAME } from './constants';

const getLanguagesFromHeaders = req => accepts(req).languages();

const extractLocalesFromReq = (req) => {
  const cookieLocale = req.cookies[LOCALE_COOKIE_NAME];
  if (cookieLocale) return [cookieLocale];
  return getLanguagesFromHeaders(req) || [];
};

export default extractLocalesFromReq;
