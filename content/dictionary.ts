import type { Dictionary } from "@/content/types";
import type { Locale } from "@/content/i18n";
import es from "@/content/dictionaries/es";
import en from "@/content/dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
