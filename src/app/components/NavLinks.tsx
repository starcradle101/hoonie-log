'use client';

import { HomeIcon, PlusIcon, FolderIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{ name: '홈', href: '/dashboard', icon: HomeIcon },
	{
		name: '새 글 작성',
		href: '/dashboard/write',
		icon: PlusIcon,
	},
	{ name: '작성 글 목록', href: '/dashboard/posts', icon: FolderIcon },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
