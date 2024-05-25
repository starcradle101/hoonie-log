import localFont from 'next/font/local';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const pretendard_var = localFont({
	src: '../../public/fonts/pretendard_variable.woff2',
	display: 'swap',
});

const ridiBatang = localFont({
	src: '../../public/fonts/RIDIBatang.otf',
	display: 'swap',
	variable: '--font-RIDIBatang',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${pretendard_var.className} flex h-screen flex-col antialiased`}
			>
				<Header></Header>
				<main className={`${ridiBatang.className} flex-1`}>{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
