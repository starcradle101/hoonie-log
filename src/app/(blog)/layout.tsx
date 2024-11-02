import localFont from 'next/font/local';

import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Providers from '@/src/components/layout/Providers';
import '../globals.css';

const pretendard_var = localFont({
	src: '../../../public/fonts/pretendard_variable.woff2',
	display: 'swap',
});

export default function BlogRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='h-full'>
			<body
				className={`${pretendard_var.className} flex min-h-full flex-col antialiased`}
			>
				<Providers>
					<Header />
					<main className='mx-auto w-full max-w-3xl flex-grow px-5 py-5'>
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
