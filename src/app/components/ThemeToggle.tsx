'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='rounded bg-gray-200 p-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
		>
			{theme === 'light' ? (
				<Moon className='hover:fill-yellow-300 hover:stroke-yellow-200' />
			) : (
				<Sun className=' hover:stroke-yellow-300' />
			)}
		</button>
	);
};

export default ThemeToggle;
