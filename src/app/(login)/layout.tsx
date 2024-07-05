'use client';
import localFont from 'next/font/local';
import '@/src/app/globals.css';

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
				className={`${pretendard_var.className} m-auto min-h-dvh px-4 antialiased md:max-w-4xl`}
			>
				{children}
			</body>
		</html>
	);
}
