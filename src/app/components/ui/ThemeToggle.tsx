'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{theme === 'light' ? (
				<Moon className='hover:fill-yellow-300 hover:stroke-yellow-200' />
			) : (
				<Sun className=' hover:fill-yellow-300 hover:stroke-yellow-300' />
			)}
		</button>
	);
};

export default ThemeToggle;
