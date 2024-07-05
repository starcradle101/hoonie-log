'use client';
import { Suspense } from 'react';
import PostAbstractList from './PostAbstractList';
import Loading from './Loading';

export default function PostAbstractListWrapper() {
	return (
		<Suspense fallback={<Loading />}>
			<PostAbstractList />
		</Suspense>
	);
}
