const language: { [index: string]: any } = {
  ru: {
    app_name: "Убит Яндексом",
    description: "Кладбище продуктов Яндекса",
  },
  en: {
    app_name: "Killed by Yandex",
    description: "Yandex's Product Cemetery",
  },
};

export enum Languages {
  RU = "ru",
  EN = "en",
}
const defaultLang = Languages.RU;

let currentLang: Languages | undefined = undefined;

// todo

export function get(str: string): string {
  if (currentLang === undefined) {
    currentLang = defaultLang;
  }
  const langData = language[currentLang];

  if (langData[str] === undefined) {
    throw currentLang + " language data does not have " + str;
  }

  return langData[str];
}

export const Language = {
  get,
  Languages,
};

export default Language;
