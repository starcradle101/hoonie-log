import { ImageResponse } from '@vercel/og';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';

export const runtime = 'edge';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const slug = searchParams.get('slug');
	const post = await getPostFromSlug(slug || '');

	if (!post) {
		return new ImageResponse(
			(
				<div
					style={{
						display: 'flex',
						width: '1200px',
						height: '630px',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: 60,
					}}
				>
					<h1>No Post Found</h1>
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		);
	}

	if (post.thumbnail_url) {
		// 썸네일 이미지가 있는 경우, 이를 배경으로 사용
		return new ImageResponse(
			(
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						width: '100%',
						height: '100%',
						backgroundImage: `url(${post.thumbnail_url})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						padding: '20px',
						textAlign: 'left',
						fontFamily: 'sans-serif',
					}}
				>
					<div
						style={{
							backgroundColor: 'rgba(0, 0, 0, 0.6)',
							padding: '20px',
							borderRadius: '10px',
						}}
					>
						<h2
							style={{
								fontSize: '50px',
								fontWeight: 'bold',
								color: 'white',
								margin: 0,
							}}
						>
							{post.title}
						</h2>
						<p
							style={{ fontSize: '24px', color: 'white', margin: '10px 0 0 0' }}
						>
							{post.description}
						</p>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		);
	}

	// 썸네일 이미지가 없는 경우, 기존 로직 사용
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					backgroundColor: '#4F46E5',
					color: 'white',
					padding: '20px',
					textAlign: 'center',
					fontFamily: 'sans-serif',
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='white'
					width='100'
					height='100'
					style={{ marginBottom: '20px' }}
				>
					<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM11 9V4.07c.32-.05.66-.07 1-.07s.68.02 1 .07V9h-2zm6.79 5c-.13.58-.21 1.17-.21 1.79 0 4.07-3.05 7.43-7 7.93V17c1.1 0 2-.9 2-2v-1l5.79-5.79c.12.58.21 1.17.21 1.79 0 4.07-3.05 7.43-7 7.93V17c1.1 0 2-.9 2-2v-1l5.79-5.79c.12.58.21 1.17.21 1.79z' />
				</svg>
				<h2 style={{ fontSize: '50px', fontWeight: 'bold' }}>{post.title}</h2>
				<p style={{ fontSize: '24px', marginTop: '10px' }}>
					{post.description}
				</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
