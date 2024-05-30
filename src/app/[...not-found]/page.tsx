import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<section className='flex min-h-full flex-col items-center justify-center'>
			<h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
				404 - 페이지 찾을 수 없음
			</h1>
			<p className='mb-4'>요청하신 페이지를 찾을 수 없어요 😥</p>
			<Link href='/' className=' bg-black p-3 text-white'>
				홈으로 돌아가기
			</Link>
		</section>
	);
}
