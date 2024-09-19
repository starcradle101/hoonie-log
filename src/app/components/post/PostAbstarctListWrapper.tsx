'use client';
import { Suspense } from 'react';
import PostAbstractList from './PostAbstractList';
import Loading from '../ui/Loading';

export default function PostAbstractListWrapper({
	query,
	currentPage,
}: {
	query: string;
	currentPage: number;
}) {
	return (
		<Suspense fallback={<Loading />}>
			<PostAbstractList query={query} currentPage={currentPage} />
		</Suspense>
	);
}
