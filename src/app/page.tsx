import { Metadata } from 'next';
import Image from 'next/image';
import Profile from '@/public/profile.png';
import Github from './components/Github';
import Linkedin from './components/Linkedin';
import Mail from './components/Mail';

const socialLinks = [
	{
		icon: <Linkedin />,
		href: 'https://www.linkedin.com/in/dreamerdev12/',
		text: 'LinkedIn',
	},
	{
		icon: <Github />,
		href: 'https://github.com/starcradle101',
		text: 'Github',
	},
	{
		icon: <Mail />,
		href: 'mailto:dreamerdev12@gmail.com',
		text: 'dreamerdev12@gmail.com',
	},
];

export const metadata: Metadata = {
	title: 'hoonie-log',
	description: 'tech blog of hoonie',
	icons: {
		icon: './favicon.ico',
		apple: './apple-icon.png',
	},
};

export default function Home() {
	return (
		<>
			<h2 className='text-2xl md:text-3xl mb-8'>🧑🏻‍💻 Hoonie Hoon</h2>
			<section className='flex flex-wrap gap-6 justify-center mb-10'>
				<Image
					src={Profile}
					alt='profile'
					priority={true}
					className=' w-72 h-auto rounded-2xl aspect-square'
				/>
				<div className='self-center '>
					<p className='font-medium text-base md:text-lg mb-3'>
						기록하는 개발자 후니훈입니다.
					</p>
					<p className='text-sm md:text-base mb-4'>
						꾸준한 회고를 통해 성장합니다.
						<br />
						복잡함 속의 단순함을 찾기 위해 노력합니다.
					</p>
					<ul className='space-y-1 self-center'>
						{socialLinks.map((link, index) => (
							<li key={index} className='flex gap-1 hover:underline'>
								{link.icon}
								<a href={link.href}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>
			</section>
			<h2 className='text-2xl md:text-3xl mb-8'>📄 최근 포스트</h2>
		</>
	);
}
