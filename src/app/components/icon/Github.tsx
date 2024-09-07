import Image from 'next/image';
import GithubLight from '@/public/icons/icon-github-mark-white.svg';
import GithubDark from '@/public/icons/icon-github-mark.svg';

export default function Github() {
	return <Image src={GithubDark} width={24} height={24} alt='github icon' />;
}
