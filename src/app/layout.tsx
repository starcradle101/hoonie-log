import localFont from 'next/font/local';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const myFont = localFont({
	src: '../../public/pretendard_variable.woff2',
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${myFont.className} antialiased flex flex-col h-screen`}
			>
				<Header></Header>
				<main className='flex-1'>{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
