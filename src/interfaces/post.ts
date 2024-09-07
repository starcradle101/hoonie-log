export type Post = {
	slug: string;
	title: string;
	description: string;
	content: string;
	created_at: string;
};

export type PostAbstract = Pick<
	Post,
	'title' | 'description' | 'created_at' | 'slug'
> & { id: number };
