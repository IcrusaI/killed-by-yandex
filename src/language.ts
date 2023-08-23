const language: { [index: string]: any } = {
  general: {
    ru_name: "Русский",
    en_name: "English",
  },
  ru: {
    app_name: "Убито Яндексом",
    description: "Кладбище продуктов Яндекса",
    select_language: "Выберите язык",
    search: "Найти...",
    service: "Сервис",
    app: "Приложение",
    hardware: "Оборудование",
    all: "Все",
    more: "Список ещё пополняется...",
  },
  en: {
    app_name: "Killed by Yandex",
    description: "Yandex's Product Cemetery",
    select_language: "Select language",
    search: "Search...",
    service: "Service",
    app: "App",
    hardware: "Hardware",
    all: "All",
    more: "The list is still being updated...",
  },
};

export enum Languages {
  RU = "ru",
  EN = "en",
}

export const flags = {
  ru: "🇷🇺",
  en: "🇺🇸",
};
const defaultLang = Languages.RU;

let currentLang: Languages;

// todo

function checkLanguageSet() {
  if (currentLang === undefined) {
    const storageVal = localStorage.getItem("language");

    if (storageVal !== null) {
      currentLang = storageVal as Languages;

      return;
    }

    currentLang = defaultLang;
  }
}

export function getCurrentLanguage() {
  checkLanguageSet();

  return currentLang;
}

export function setCurrentLanguage(language: Languages) {
  currentLang = language;
  localStorage.setItem("language", language);
  location.reload();
}

export function get(str: string): string {
  checkLanguageSet();

  const langData = Object.assign(language[currentLang], language.general),
    langStr = langData[str];

  if (langStr === undefined) {
    throw currentLang + " language data does not have " + str;
  }

  return langStr;
}

const Language = {
  get,
  flags,
  Languages,
  getCurrentLanguage,
  setCurrentLanguage,
};

export default Language;
