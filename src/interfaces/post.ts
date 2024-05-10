export type Post = {
	slug: string;
	title: string;
	date: string;
	description: string;
	ogImage: {
		url: string;
	};
	readingMinutes: number;
	dateString: string;
	content: string;
};

export type PostAbstract = Pick<
	Post,
	'title' | 'description' | 'dateString' | 'slug'
>;
