import PostHeader from '../../../components/PostHeader';
import PostBody from '../../../components/PostBody';
import Giscus from '../../../components/Giscus';
import dayjs from 'dayjs';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getPostFromSlug(decodeURIComponent(params.slug));

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<>
			<PostHeader
				title={post.title}
				created_at={dayjs(post.created_at).format('YYYY년 MM월 DD일')}
			/>
			<PostBody postContent={post.content} />
			<div className='my-6 border-b-2 border-b-slate-200'></div>
			<Giscus />
		</>
	);
}
