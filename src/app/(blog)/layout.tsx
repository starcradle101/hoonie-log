import localFont from 'next/font/local';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../globals.css';

const pretendard_var = localFont({
	src: '../../../public/fonts/pretendard_variable.woff2',
	display: 'swap',
});

const ridiBatang = localFont({
	src: '../../../public/fonts/RIDIBatang.otf',
	display: 'swap',
	variable: '--font-RIDIBatang',
});

export default function BlogRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${pretendard_var.className} m-auto flex h-screen flex-col px-5 antialiased md:max-w-3xl`}
			>
				<Header></Header>
				<main className={`${ridiBatang.className} flex flex-1 flex-col`}>
					{children}
				</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
