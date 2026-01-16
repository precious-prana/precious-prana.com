// Luxon is already an Eleventy dependency anyway
import { DateTime } from "luxon";

// TODO: allow setting the timezone and locale
const timezone = "Europe/Paris";
const locale = "fr-FR";

const dateObj = (eleventyDate) => {
  if (eleventyDate === undefined) {
    return DateTime.now().setZone(timezone).setLocale(locale);
  }
  return DateTime.fromJSDate(eleventyDate, {
    zone: timezone,
  }).setLocale(locale);
};

// 1983
export const yearPath = (date) => dateObj(date).toFormat("yyyy");

// 1983/12
export const monthPath = (date) => dateObj(date).toFormat("yyyy/MM");

// 1983/12/25
export const dayPath = (date) => dateObj(date).toFormat("yyyy/MM/dd");

export const future = (value) => {
  return (
    DateTime.fromJSDate(value, {
      zone: "Europe/Paris"
    })
      .diffNow("hours")
      .toObject().hours >= -24
  );
};