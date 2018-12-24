/**
 * This method will try to choose the best possible locale that the clients accepts.
 * Falls back to the default locale.
 */
const guessLocale = (availableLocales, clientLocales, defaultLocale) => (
  clientLocales.filter(clientLocale => availableLocales.includes(clientLocale))[0] || defaultLocale
);

export default guessLocale;
