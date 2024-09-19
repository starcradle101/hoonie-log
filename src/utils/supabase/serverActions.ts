'use server';
import { createClient } from './server';

export async function login(formData: FormData) {
	const supabase = createClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		return { success: false, error: error.message };
	}

	console.log('로그인 완료');
	return { success: true };
}

export async function signout() {
	const supabase = createClient();
	const { error } = await supabase.auth.signOut();

	if (error) {
		return { success: false, error };
	}

	return { success: true };
}

export async function getUserData() {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user;
}

export async function fetchPostAbstracts(
	page: number,
	itemsPerPage: number,
	query?: string
) {
	const supabase = createClient();
	const start = (page - 1) * itemsPerPage;
	const end = start + itemsPerPage - 1;

	let queryBuilder = supabase.from('posts').select('*', { count: 'exact' });

	if (query && query.trim() !== '') {
		queryBuilder = queryBuilder
			.ilike('title', `%${query}%`)
			.or(`description.ilike.%${query}%`);
	}

	let { count, error: countError } = await queryBuilder;
	if (countError) {
		console.error(countError);
		return { posts: [], totalPosts: 0 };
	}

	queryBuilder = queryBuilder.range(start, end);
	let { data: posts, error } = await queryBuilder;

	if (error) {
		console.error(error);
		return { posts: [], totalPosts: 0 };
	}

	return { posts: posts || [], totalPosts: count || 0 };
}

export async function fetchLatestPost() {
	const supabase = createClient();
	const { data, error } = await supabase
		.from('posts')
		.select('*')
		.order('created_at', { ascending: false })
		.limit(1)
		.single();

	if (error) {
		console.error(error);
		return null;
	}

	return data;
}

export const getPostSlugs = async () => {
	const supabase = createClient();
	const { data, error } = await supabase.from('posts').select('slug');

	if (error) {
		console.error('오류가 발생했습니다:', error);
		return null;
	}

	return data;
};

export const getPostFromSlug = async (slug: string) => {
	const supabase = createClient();
	const { data, error } = await supabase
		.from('posts')
		.select('*')
		.eq('slug', slug)
		.limit(1)
		.maybeSingle();

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
