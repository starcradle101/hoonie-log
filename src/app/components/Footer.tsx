import Github from './icon/Github';
import Authentication from './icon/Authentication';

export default function Footer() {
	return (
		<footer className='flex flex-col gap-2 py-8'>
			<div className='flex justify-center gap-4'>
				<a href='https://github.com/starcradle101'>
					<Github />
				</a>
				<Authentication />
			</div>
			<span className='block break-keep text-center text-sm'>
				© 2024. Hoon Kang.
			</span>
		</footer>
	);
}
