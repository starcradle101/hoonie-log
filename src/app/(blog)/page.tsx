import { Metadata } from 'next';
import Image from 'next/image';
import Profile from '@/public/profile.jpg';
import Github from '../components/icon/Github';

import { Mail } from 'lucide-react';
import LatestPost from '../components/LatestPost';

const socialLinks = [
	{
		icon: <Github />,
		href: 'https://github.com/starcradle101',
		text: 'Github',
	},
	{
		icon: <Mail width={24} height={24} />,
		href: 'mailto:dreamerdev12@gmail.com',
		text: 'dreamerdev12@gmail.com',
	},
];

export default function Home() {
	return (
		<>
			<h2 className='mb-8 text-2xl font-semibold md:text-3xl'>
				🧑🏻‍💻 Hoonie Hoon
			</h2>

			<section className='mb-10 flex flex-wrap justify-center gap-8'>
				<Image
					src={Profile}
					alt='profile'
					priority={true}
					className='aspect-square h-auto w-80 rounded-2xl'
				/>
				<div className='self-center '>
					<p className='mb-3 text-base font-medium md:text-lg'>
						기록하는 개발자 후니훈입니다.
					</p>
					<p className='mb-4 text-sm md:text-base'>
						꾸준한 회고를 통해 성장합니다.
						<br />
						복잡함 속의 단순함을 찾기 위해 노력합니다.
					</p>
					<ul className='space-y-2 self-center'>
						{socialLinks.map((link, index) => (
							<li key={index} className='flex gap-1 hover:underline'>
								{link.icon}
								<a href={link.href}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className='flex flex-col'>
				<h2 className='mb-4 text-2xl font-semibold md:text-3xl'>
					📄 최근 포스트
				</h2>
				<LatestPost />
			</section>
		</>
	);
}
