export interface ContactInfoItem {
  icon: string;
  title: string;
  details: string[];
}

type TranslationFunction = (key: string) => string;

export const getContactInfo = (t: TranslationFunction): ContactInfoItem[] => [
  {
    icon: "📍",
    title: t("contact.info.address.title"),
    details: [
      t("contact.info.address.line1"),
      t("contact.info.address.line2"),
      t("contact.info.address.line3"),
    ],
  },
  {
    icon: "📞",
    title: t("contact.info.phone.title"),
    details: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: "✉️",
    title: t("contact.info.email.title"),
    details: ["info@fieldgrip.com", "support@fieldgrip.com"],
  },
  {
    icon: "🕒",
    title: t("contact.info.hours.title"),
    details: [t("contact.info.hours.weekdays"), t("contact.info.hours.sunday")],
  },
];
