const PostListItemSkeleton = ({ isDashboard = false }) => (
	<div className='mb-8 flex animate-pulse'>
		<div className='flex-1'>
			<div className='mb-2 h-6 w-3/4 rounded bg-gray-200'></div>
			<div className='h-4 w-1/4 rounded bg-gray-200'></div>
		</div>
		{isDashboard && (
			<div className='flex items-center gap-2'>
				<div className='h-8 w-12 rounded bg-gray-200'></div>
				<div className='h-8 w-12 rounded bg-gray-200'></div>
			</div>
		)}
	</div>
);

const PostListSkeleton = ({ itemsCount = 10, isDashboard = false }) => {
	return (
		<div className='flex h-auto w-full flex-1 flex-col items-center pb-4'>
			<ul className='mb-2 w-full list-none'>
				{Array.from({ length: itemsCount }).map((_, index) => (
					<li key={index} className='my-1'>
						<PostListItemSkeleton isDashboard={isDashboard} />
					</li>
				))}
			</ul>
			<div className='flex flex-1 animate-pulse items-end justify-center gap-2'>
				<div className='h-8 w-8 rounded bg-gray-200'></div>
				<div className='flex gap-1'>
					{Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className='h-8 w-8 rounded bg-gray-200'></div>
					))}
				</div>
				<div className='h-8 w-8 rounded bg-gray-200'></div>
			</div>
		</div>
	);
};

export { PostListSkeleton, PostListItemSkeleton };
