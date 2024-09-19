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
						background: '#f0f0f0',
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

	// 썸네일이 있는 경우의 레이아웃
	if (post.thumbnail_url) {
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

	// 썸네일이 없는 경우의 레이아웃
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
					padding: '40px',
					textAlign: 'center',
				}}
			>
				<h2
					style={{
						fontSize: '60px',
						fontWeight: 'bold',
						marginBottom: '20px',
					}}
				>
					{post.title}
				</h2>
				<p style={{ fontSize: '30px', maxWidth: '800px' }}>
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
