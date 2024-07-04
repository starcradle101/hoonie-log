import { redirect } from 'next/navigation';
import { createClient } from '@/src/utils/supabase/server';

export default async function DashboardPage() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	return (
		<section className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>블로그 통계</h1>
			<span>추가 예정</span>
		</section>
	);
}
