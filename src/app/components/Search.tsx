'use client';
import { SearchIcon } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handleSearch(term: string) {
		console.log(`검색하는 중... ${term}`);
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className='relative mb-4 flex w-full'>
			<label htmlFor='search' className='sr-only'>
				Search
			</label>
			<input
				className='peer block flex-1 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get('query')?.toString()}
			/>
			<SearchIcon
				className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'
				width={24}
				height={24}
			/>
		</div>
	);
}
