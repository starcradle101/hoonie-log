import { redirect } from 'next/navigation';
import { createClient } from '@/src/utils/supabase/server';
import SignOut from '../components/SignOut';

export default async function DashboardPage() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	console.log(data.user);

	return (
		<>
			<p>Hello {data.user.email}</p>
			<p>{data.user.role}</p>
			<p>여기는 관리자 대시보드입니다</p>
			<SignOut />
		</>
	);
}
