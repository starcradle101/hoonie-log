import '@/src/app/globals.css';

export const metadata = {
	title: '404 Not Found',
	description: 'Cannot found requested page',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='h-screen'>{children}</body>
		</html>
	);
}
