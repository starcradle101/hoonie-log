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
				className={`${pretendard_var.className} flex h-screen flex-col antialiased`}
			>
				<main className={`flex-1`}>{children}</main>
			</body>
		</html>
	);
}
