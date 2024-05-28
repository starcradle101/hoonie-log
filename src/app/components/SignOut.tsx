import { signout } from '@/src/utils/supabase/actions';

export default function SignOut() {
	return (
		<form>
			<button formAction={signout}>로그아웃하기</button>
		</form>
	);
}
