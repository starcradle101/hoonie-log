'use client';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import '@/src/app/globals.css';
import SideNav from '@/src/components/layout/SideNav';

const pretendard_var = localFont({
	src: '../../../public/fonts/pretendard_variable.woff2',
	display: 'swap',
});

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const showSideNav = !pathname.startsWith('/dashboard/write');

	return (
		<html lang='en' className='h-full'>
			<body
				className={`${pretendard_var.className} flex h-full flex-col antialiased md:m-auto md:flex-row`}
			>
				{showSideNav && <SideNav />}
				<section className='flex-1 overflow-y-auto px-4'>{children}</section>
			</body>
		</html>
	);
}
