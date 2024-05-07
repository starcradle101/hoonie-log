import Image from 'next/image';

export default function Footer() {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-center gap-4'>
				<a href='https://github.com/starcradle101'>
					<Image
						src='./icons/icon-github.svg'
						width={24}
						height={24}
						alt='github icon'
					/>
				</a>
				<a href='https://www.linkedin.com/in/dreamerdev12/'>
					<Image
						src='./icons/icon-linkedin.svg'
						width={24}
						height={24}
						alt='linkedin icon'
					/>
				</a>
			</div>
			<span className='block text-center'>
				© 2024. Hoon Kang all rights reserved.
			</span>
		</div>
	);
}
