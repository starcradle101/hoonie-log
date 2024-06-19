import { redirect } from 'next/navigation';
import { createClient } from '@/src/utils/supabase/server';
import Search from '../../components/Search';
import Table from '../../components/Table';

export default async function DashboardPage() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	return (
		<section>
			<h2 className='mb-8 text-2xl font-semibold md:text-3xl'>
				📊 블로그 통계
			</h2>

			<h2 className='mb-8 text-2xl font-semibold md:text-3xl'>
				📝 작성한 글 목록
			</h2>

			<Search placeholder={'작성한 글 검색하기...'} />
			<Table />
		</section>
	);
}
