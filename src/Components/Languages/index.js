import Vietnamese from 'src/i18n/vi';
import English from 'src/i18n/en';

const Translate = (lang, key, params) => {
  const language = lang === 'vi' ? Vietnamese : English;
  const translation = key
    .split('.')
    .reduce((acc, currKey) => (acc ? acc[currKey] : undefined), language);

  if (typeof translation !== 'string') {
    console.warn('No translation found for', key);
    return key;
  }

  if (params) {
    return translation.replace(/\$\{\w+\}/g, (match) => {
      const param = match.substring(2, match.length - 1);
      return params[param] || match;
    });
  }

  return translation;
};

export default Translate;
