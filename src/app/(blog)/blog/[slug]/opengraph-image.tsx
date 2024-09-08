import { ImageResponse } from 'next/og';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';

export const alt = 'hoonie-log';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
	const post = await getPostFromSlug(decodeURIComponent(params.slug));

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{post.title}
			</div>
		),
		{
			...size,
		}
	);
}
