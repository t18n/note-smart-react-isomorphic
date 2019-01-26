import getCookie from 'src/utils/getCookie';
import { LOCALE_DEFAULT, LOCALE_COOKIE_NAME, LOCALE_AVAILABLE } from './constants';

// Get Locale from request server
const getLocaleOnServer = (req) => {
  // Check if locale has been chosen before via Cookie
  let currentLocale = req.cookies[LOCALE_COOKIE_NAME];

  // Check if locale belongs to available locales
  currentLocale = (LOCALE_AVAILABLE.includes(currentLocale)) ? currentLocale : LOCALE_DEFAULT;

  return currentLocale;
};

// Get Locale on client side
const getLocaleOnClient = (location) => {
  let currentLocale = getCookie('locale');
  if (!currentLocale) location.pathname.substr(1, 2);
  currentLocale = (LOCALE_AVAILABLE.includes(currentLocale)) ? currentLocale : LOCALE_DEFAULT;
  return currentLocale;
};

export {
  getLocaleOnServer,
  getLocaleOnClient,
};
