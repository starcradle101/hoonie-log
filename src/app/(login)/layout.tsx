'use client';
import localFont from 'next/font/local';
import '@/src/app/globals.css';
import Providers from '@/src/components/layout/Providers';

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
				className={`${pretendard_var.className} m-auto min-h-full px-4 antialiased md:max-w-4xl`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
