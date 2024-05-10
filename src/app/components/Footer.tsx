import Github from './Github';
import Linkedin from './Linkedin';

export default function Footer() {
	return (
		<div className='flex flex-col gap-2 py-8'>
			<div className='flex justify-center gap-4'>
				<a href='https://github.com/starcradle101'>
					<Github />
				</a>
				<a href='https://www.linkedin.com/in/dreamerdev12/'>
					<Linkedin />
				</a>
			</div>
			<span className='block text-center'>
				© 2024. Hoon Kang all rights reserved.
			</span>
		</div>
	);
}
