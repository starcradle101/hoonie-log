import { PostAbstract } from '@/src/interfaces/post';
import PostAbstractItem from './PostAbstarctItem';

interface PostAbstractListProps {
	posts: PostAbstract[];
}

export default function PostAbstractList({ posts }: PostAbstractListProps) {
	return (
		<div className='post-abstract-list'>
			{posts.map((post, index) => (
				<PostAbstractItem key={index} post={post} />
			))}
		</div>
	);
}
