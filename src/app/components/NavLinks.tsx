'use client';

import { BarChart3Icon, FilePlusIcon, LibraryBigIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{ name: '블로그 통계', href: '/dashboard', icon: BarChart3Icon },
	{
		name: '새 글 작성',
		href: '/dashboard/write',
		icon: FilePlusIcon,
	},
	{ name: '글 목록', href: '/dashboard/posts', icon: LibraryBigIcon },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				const isActive = pathname === link.href;

				return (
					<Link
						key={link.name}
						href={link.href}
						className={`flex h-12 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${
							isActive
								? 'bg-green-600 text-white'
								: 'bg-gray-50 text-gray-800 hover:bg-green-100 hover:text-green-600'
						}`}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
