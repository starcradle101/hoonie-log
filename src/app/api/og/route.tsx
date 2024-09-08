import { ImageResponse } from '@vercel/og';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';

export const runtime = 'edge'; // API가 edge에서 실행되도록 설정

export async function GET(req: Request) {
	// URL에서 query parameter로 전달된 slug를 가져옵니다.
	const { searchParams } = new URL(req.url);
	const slug = searchParams.get('slug');

	// getPostFromSlug 함수를 사용해 Supabase에서 데이터를 가져옴
	const post = await getPostFromSlug(slug || '');

	// 만약 포스트가 없으면 기본 이미지를 생성하거나 오류 처리
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

	// Supabase에서 가져온 데이터를 바탕으로 이미지를 생성
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '1200px',
					height: '630px',
					backgroundColor: '#f0f0f0',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 40,
					padding: '20px',
					textAlign: 'center',
				}}
			>
				<h1
					style={{ fontSize: '60px', fontWeight: 'bold', marginBottom: '20px' }}
				>
					{post.title}
				</h1>
				<p style={{ fontSize: '30px', color: '#555' }}>{post.description}</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
