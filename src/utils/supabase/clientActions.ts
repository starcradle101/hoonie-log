import readingTime from 'reading-time';
import dayjs from 'dayjs';
import { supabaseClient } from './client';
import { Post, PostAbstract } from '@/src/interfaces/post';

export const createPostData = async (
	title: string,
	description: string,
	content: string
) => {
	const slug = encodeURIComponent(title);
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
		console.error('Error creating post:', error);
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

export const fetchPostAbstracts = async (
	page: number,
	itemsPerPage: number
): Promise<{ posts: PostAbstract[]; totalPosts: number } | null> => {
	const from = (page - 1) * itemsPerPage;
	const to = page * itemsPerPage - 1;

	const { data, error, count } = await supabaseClient
		.from('posts')
		.select('id, slug, title, description, created_at', { count: 'exact' })
		.range(from, to);

	if (error || !data) {
		console.error('게시글 불러오기 실패:', error || 'No data found');
		return null;
	}

	return { posts: data, totalPosts: count || 0 };
};

export const getPostSlugs = async () => {
	const { data, error } = await supabaseClient.from('posts').select('slug');

	if (error) {
		console.error('오류가 발생했습니다:', error);
		return null;
	}

	return data;
};

export const getPostFromSlug = async (slug: string) => {
	const { data, error } = await supabaseClient
		.from('posts')
		.select('*')
		.eq('slug', slug)
		.limit(1)
		.maybeSingle();

	console.log('Data fetched for slug:', slug, data);

	if (error) {
		console.error('Error fetching post:', error.message);
		return null;
	}

	if (!data) {
		console.error('No data found for slug:', slug);
		return null;
	}

	return data;
};
