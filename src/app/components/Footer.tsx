import Github from './Github';
import Linkedin from './Linkedin';
import Authentication from './Authentication';

export default function Footer() {
	return (
		<footer className='flex flex-col gap-2 py-8'>
			<div className='flex justify-center gap-4'>
				<a href='https://github.com/starcradle101'>
					<Github />
				</a>
				<a href='https://www.linkedin.com/in/dreamerdev12/'>
					<Linkedin />
				</a>
				<Authentication />
			</div>
			<span className='block break-keep text-center text-sm text-slate-500'>
				© 2024. Hoon Kang. <br />이 페이지에는 리디주식회사에서 제공한 리디바탕
				글꼴이 사용되어 있습니다.
			</span>
		</footer>
	);
}
