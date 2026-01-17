export const video = (path) => {
  const fullUrl = `https://precious-prana-2026.netlify.app${path}`;
  return `
<video autoplay loop muted playsinline>
  <source src="${fullUrl}" type="video/mp4">
  <p>Votre navigateur ne supporte pas les vidéos, vous pouvez <a href="${fullUrl}">la télécharger</a>.</p>
</video>`;
}
