'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseServer } from './server';

export async function login(formData: FormData) {
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	// login data 포함시켜서 로직 처리 수정할 것
	const { error } = await supabaseServer.auth.signInWithPassword(data);

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/dashboard');
}

export async function signout() {
	const { error } = await supabaseServer.auth.signOut();

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/login');
}

export async function getUserData() {
	const {
		data: { user },
	} = await supabaseServer.auth.getUser();

	return user;
}
