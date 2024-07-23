import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from "./assets/i18n/en_US";
import pl_PL from "./assets/i18n/pl_PL";

const resources = {
	en_US: {
		translation: en_US,
	},
	pl_PL: {
		translation: pl_PL,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en_US",
	fallbackLng: "en_US",
	keySeparator: ".",
	interpolation: {
		escapeValue: false,
	},
});

export const translate = (key: string) => i18n.t(key);
