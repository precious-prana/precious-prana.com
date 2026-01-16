export const ateliers = (collection) => {
  return collection.getFilteredByGlob("src/collections/ateliers/*.md").sort((a, b) => {
    const orderA = a.data.order || 0;
    const orderB = b.data.order || 0;
    return orderA - orderB;
  });
}