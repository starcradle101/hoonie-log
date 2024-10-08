export const customSlugify = (text: string): string => {
	let filteredText = text
		.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9\s]/g, '')
		.toLowerCase();

	filteredText = filteredText.replace(/\s+/g, '-');

	return filteredText;
};

export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};
