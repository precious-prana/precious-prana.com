export const navigation = (collection) => {
  return collection.getFilteredByTag("navigation").sort((a, b) => {
    return a.data.navorder - b.data.navorder;
  });
}