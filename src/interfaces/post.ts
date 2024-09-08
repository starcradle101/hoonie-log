export type Post = {
	slug: string;
	title: string;
	description: string;
	content: object;
	created_at: string;
	thumbnail_url: string;
};

export type PostAbstract = Pick<
	Post,
	'title' | 'description' | 'created_at' | 'slug'
> & { id: number };
