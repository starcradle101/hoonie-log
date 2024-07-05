'use server';
import { createClient } from './server';

export async function login(formData: FormData) {
	const supabase = createClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	// login data 포함시켜서 로직 처리 수정할 것
	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		return { success: false, error };
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
