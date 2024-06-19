'use client';
import Header from '../../components/Header';
import { usePathname } from 'next/navigation';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isWriteRoute = pathname === '/dashboard/write';

	return (
		<div
			className={` m-auto h-screen ${isWriteRoute ? 'px-6 md:max-w-4xl' : 'px-6 md:max-w-3xl'}`}
		>
			{!isWriteRoute && <Header />}
			{children}
		</div>
	);
}
