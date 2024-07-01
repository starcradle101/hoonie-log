import { redirect } from 'next/navigation';
import { createClient } from '@/src/utils/supabase/server';
import Search from '../../components/Search';
import Table from '../../components/Table';
import Link from 'next/link';

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

			<Search placeholder={'작성한 글 검색하기...'} />
			<Table />
			<Link
				href='/dashboard/write'
				className=' border-1 self-end rounded-md bg-green-500 px-2 py-1 text-white hover:bg-green-300'
			>
				글 작성
			</Link>
		</section>
	);
}
