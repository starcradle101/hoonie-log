import readingTime from 'reading-time';
import dayjs from 'dayjs';
import { supabaseClient } from './client';
import { Post } from '@/src/interfaces/post';
import { customSlugify } from '@/src/lib/api';
import { v4 as uuidv4 } from 'uuid';

export const createPostData = async (
	title: string,
	description: string,
	content: string
) => {
	const baseSlug = customSlugify(title);
	const slug = `${baseSlug}-${uuidv4()}`;

	const created_at = dayjs().locale('ko').format('YYYY-MM-DD');
	const updated_at = created_at;
	const reading_time = Math.ceil(readingTime(content).minutes);

	const postData: Post = {
		slug,
		title,
		description,
		content,
		created_at,
		updated_at,
		reading_time,
	};

	const { data, error } = await supabaseClient
		.from('posts')
		.insert([postData])
		.select();

	if (error) {
		console.error('게시글 생성 실패:', error);
		return { success: false, error };
	}

	return { success: true, data };
};

export const updatePostData = async (
	slug: string,
	title: string,
	description: string,
	content: string
) => {
	const updated_at = dayjs().locale('ko').format('YYYY-MM-DD');
	const reading_time = Math.ceil(readingTime(content).minutes);

	const postData = {
		title,
		description,
		content,
		updated_at,
		reading_time,
	};

	const { data, error } = await supabaseClient
		.from('posts')
		.update(postData)
		.eq('slug', slug)
		.select();

	if (error) {
		console.error('Error updating post:', error);
		return { success: false, error };
	}

	return { success: true, data };
};

export const deletePostData = async (id: number) => {
	const { error } = await supabaseClient.from('posts').delete().eq('id', id);

	if (error) {
		console.error('게시글 삭제에 실패했습니다:', error);
		return { success: false, error };
	}

	return { success: true };
};
