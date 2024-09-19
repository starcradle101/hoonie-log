import dayjs from 'dayjs';
import { supabaseClient } from './client';
import { BasePost, NewPost } from '@/src/interfaces/post';
import { customSlugify } from '@/src/lib/api';
import { v4 as uuidv4 } from 'uuid';

export const getAllPosts = async () => {
	const { data, error } = await supabaseClient.from('posts').select('*');

	if (error) {
		console.error('오류가 발생했습니다:', error);
		return null;
	}

	return data;
};

export const createPostData = async (postData: NewPost) => {
	const slug = `${customSlugify(postData.title)}-${uuidv4()}`;
	const created_at = dayjs().format('YYYY-MM-DD');

	const fullPostData = {
		...postData,
		slug,
		created_at,
	};

	const { data, error } = await supabaseClient
		.from('posts')
		.insert([fullPostData])
		.select();

	if (error) {
		console.error('게시글 생성 실패:', error);
		return { success: false, error };
	}

	return { success: true, data };
};

export const updatePostData = async (slug: string, postData: BasePost) => {
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

export const uploadThumbnail = async (thumbnail: File): Promise<string> => {
	try {
		const fileName = `${Date.now()}_${thumbnail.name}`;

		const { data, error } = await supabaseClient.storage
			.from('images')
			.upload(`thumbnails/${fileName}`, thumbnail, {
				cacheControl: '3600',
				upsert: false,
			});

		if (error) {
			console.error('Error uploading thumbnail:', error);
			return '';
		}

		const {
			data: { publicUrl },
		} = supabaseClient.storage
			.from('images')
			.getPublicUrl(`thumbnails/${fileName}`);

		return publicUrl;
	} catch (error) {
		console.error('Error in uploadThumbnail:', error);
		return '';
	}
};
