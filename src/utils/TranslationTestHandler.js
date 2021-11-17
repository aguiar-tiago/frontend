import { initReactI18next } from 'react-i18next';
import i18n from './i18n';

const DEFAULT_LANGUAGE = "en"
const DEFAULT_NAMESPACE = "translations"

export function addI18nResources(
    resource = {},
    {ns = 'translations', lang = 'en' } = {}
) {
    i18n.addResourceBundle(lang, ns, resource, true, true);
}

export function initI18n(translations = {}) {
    i18n.use(initReactI18next).init({
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      ns: [DEFAULT_NAMESPACE],
      defaultNS: DEFAULT_NAMESPACE,
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      resources: { [DEFAULT_LANGUAGE]: { [DEFAULT_NAMESPACE]: translations } },
    });
}
