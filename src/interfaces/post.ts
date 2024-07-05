export type Post = {
	slug: string;
	title: string;
	description: string;
	content: object;
	createdAt: string;
	updatedAt: string;
};

export type PostAbstract = Pick<
	Post,
	'title' | 'description' | 'createdAt' | 'slug'
>;
