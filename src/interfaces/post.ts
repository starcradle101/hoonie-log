import { ChangeEvent } from 'react';

export type BasePost = {
	title: string;
	description: string;
	content: object;
	thumbnail_url: string;
};

export type NewPost = BasePost;

export type ExistingPost = BasePost & {
	slug: string;
	created_at: string;
};

export type Post = NewPost | ExistingPost;

export type PostAbstract = Pick<
	ExistingPost,
	'title' | 'description' | 'created_at' | 'slug'
> & { id: number };

export interface PostHeaderProps {
	title: string;
	created_at: string;
}
export interface PostBodyProps {
	postContent: object;
}
export interface PostAbstractItemProps {
	post: PostAbstract;
	onPostDeleted: () => void;
}
export interface TitleInputProps {
	title: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface DescriptionInputProps {
	description: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ThumbnailInputProps {
	thumbnailUrl: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface ContentEditorProps {
	content: object;
	onChange: (newContent: object) => void;
}

export interface FormButtonsProps {
	onCancel: () => void;
}

export interface TOCItem {
	id: string;
	text: string;
	level: number;
}
