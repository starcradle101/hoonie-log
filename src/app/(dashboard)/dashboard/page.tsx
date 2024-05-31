import { redirect } from 'next/navigation';
import { createClient } from '@/src/utils/supabase/server';

export default async function DashboardPage() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	console.log(data.user);

	return (
		<section className='flex-grow p-6 md:p-12'>
			<h1 className='text-4xl'>Dashboard</h1>
			<p>Hello {data.user.email}</p>
			<p>{data.user.role}</p>
		</section>
	);
}
