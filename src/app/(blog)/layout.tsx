import localFont from 'next/font/local';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
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
				className={`${pretendard_var.className} flex h-screen flex-col antialiased`}
			>
				<ThemeProvider attribute='class'>
					<Header></Header>
					<main
						className={`${ridiBatang.className} m-auto mt-5  w-full max-w-3xl flex-1 px-5 md:w-[calc(100%-4rem)] md:max-w-3xl md:px-0 xl:w-[calc(100%-30rem)]`}
					>
						{children}
					</main>
					<Footer></Footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
