'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from './server';

export async function login(formData: FormData) {
	const supabase = createClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/dashboard');
}

export async function signout() {
	const supabase = createClient();

	const { error } = await supabase.auth.signOut();

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/');
}

export async function getUserData() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user;
}
