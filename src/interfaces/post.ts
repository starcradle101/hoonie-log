export type Post = {
	slug: string;
	title: string;
	description: string;
	content: string;
	created_at: string;
	updated_at: string;
	reading_time: number;
};

export type PostAbstract = Pick<
	Post,
	'title' | 'description' | 'created_at' | 'slug'
>;
