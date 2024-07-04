'use client';
import localFont from 'next/font/local';
import '@/src/app/globals.css';
import SideNav from '../components/SideNav';

const pretendard_var = localFont({
	src: '../../../public/fonts/pretendard_variable.woff2',
	display: 'swap',
});

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${pretendard_var.className} flex h-screen flex-col antialiased md:m-auto md:flex-row`}
			>
				<SideNav />
				<section className='flex-1 overflow-y-auto px-4'>{children}</section>
			</body>
		</html>
	);
}
