import { useEffect, useRef, useState, useCallback } from 'react';

interface TOCItem {
	id: string;
	text: string;
	level: number;
}

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		const updateMatches = () => setMatches(media.matches);
		updateMatches();
		media.addEventListener('change', updateMatches);
		return () => media.removeEventListener('change', updateMatches);
	}, [query]);

	return matches;
};

const ToC = () => {
	const [toc, setToc] = useState<TOCItem[]>([]);
	const [activeId, setActiveId] = useState<string>('');
	const observerRef = useRef<IntersectionObserver | null>(null);
	const isXlScreen = useMediaQuery('(min-width: 1280px)');

	const generateTocItems = useCallback(() => {
		const headings = Array.from(
			document.querySelectorAll('h1, h2, h3, h4, h5, h6')
		);
		return headings.map((heading) => {
			const id =
				heading.id ||
				heading.textContent?.trim().replace(/\s+/g, '-').toLowerCase() ||
				'';
			if (!heading.id) heading.id = id;
			return {
				id,
				text: heading.textContent || '',
				level: parseInt(heading.tagName.charAt(1)),
			};
		});
	}, []);

	useEffect(() => {
		if (!isXlScreen) {
			observerRef.current?.disconnect();
			return;
		}

		const tocItems = generateTocItems();
		setToc(tocItems);

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			const visibleHeadings = entries.filter((entry) => entry.isIntersecting);
			if (visibleHeadings.length > 0) {
				setActiveId(visibleHeadings[0].target.id);
			}
		};

		observerRef.current = new IntersectionObserver(observerCallback, {
			rootMargin: '-80px 0px -80%',
			threshold: 0.1,
		});

		tocItems.forEach((item) => {
			const element = document.getElementById(item.id);
			if (element) observerRef.current?.observe(element);
		});

		return () => observerRef.current?.disconnect();
	}, [isXlScreen, generateTocItems]);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
			e.preventDefault();
			const element = document.getElementById(id);
			if (element) {
				const headerOffset = 100;
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.scrollY - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				});
			}
		},
		[]
	);

	if (!isXlScreen) return null;

	return (
		<div className='pointer-events-none fixed inset-y-0 right-5 flex items-center'>
			<nav className='pointer-events-auto max-h-[80vh] w-64 overflow-y-auto rounded-lg bg-gray-100 p-5 shadow-md'>
				<ul className='m-0 list-none p-0'>
					{toc.map((item) => (
						<li
							key={item.id}
							className='mb-2.5'
							style={{ marginLeft: `${(item.level - 1) * 20}px` }}
						>
							<a
								href={`#${item.id}`}
								onClick={(e) => handleClick(e, item.id)}
								className={`block overflow-hidden text-ellipsis whitespace-nowrap text-sm no-underline transition-colors duration-300 ${
									activeId === item.id
										? 'font-bold text-blue-600'
										: 'text-gray-700 hover:text-blue-600'
								}`}
							>
								{item.text}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default ToC;
