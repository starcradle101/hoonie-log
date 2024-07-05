import dayjs from 'dayjs';
import { supabaseClient } from './client';
import { Post } from '@/src/interfaces/post';

export const createPostData = async (
	title: string,
	description: string,
	content: object
) => {
	const slug = encodeURIComponent(title);

	const created_at = dayjs().locale('ko').format('YYYY-MM-DD');
	const updated_at = created_at;

	const postData: Post = {
		slug,
		title,
		description,
		content,
		created_at,
		updated_at,
	};

	const { data, error } = await supabaseClient
		.from('posts')
		.insert([postData])
		.select();

	if (error) {
		console.error('Error creating post:', error);
		return { success: false, error };
	}

	return { success: true, data };
};
