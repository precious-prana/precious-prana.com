import getShareImage from "@jlengstorf/get-share-image";

export const ogImage = (title, tagline) => {
	return title
		? getShareImage({
			imageWidth: 1200,
			imageHeight: 630,
			cloudName: 'nho',
			imagePublicID: 'resources/precious-prana-opengraph-background',
			version: 'v1578868816',
			textAreaWidth: 1000,
			textLeftOffset: 100,
			textColor: '479b10',

			titleFont: 'Dosis',
			titleBottomOffset: 270,
			titleFontSize: 70,
			title: title,

			taglineFont: 'Dosis',
			taglineTopOffset: 400,
			taglineFontSize: 40,
			tagline: tagline
			})
		: "";
};
