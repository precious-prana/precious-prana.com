import { DateTime } from "luxon";

export const agenda_futur = (collection) => {
  return collection.getFilteredByTag("agenda")
    .filter(evenement => {
      const eventDiff = DateTime.fromJSDate(evenement.date, {
        zone: "Europe/Paris"
      })
        .diffNow("hours")
        .toObject().hours;
      return (
        eventDiff >= -24 && (process.env.ELEVENTY_ENV === 'development' || evenement.data.published === undefined || evenement.data.published)
      );
    });
};
