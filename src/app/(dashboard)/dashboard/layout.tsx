'use client';

import { usePathname } from 'next/navigation';
import SideNav from '../../components/SideNav';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isCreateRoute = pathname === '/dashboard/create';

	return (
		<div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
			{!isCreateRoute && (
				<div className='w-full flex-none md:w-64'>
					<SideNav />
				</div>
			)}

			<div className='w-full'>{children}</div>
		</div>
	);
}
