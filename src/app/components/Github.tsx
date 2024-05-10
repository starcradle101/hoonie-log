import Image from 'next/image';
import GithubLogo from '@/public/icons/icon-github.svg';

export default function Github() {
	return <Image src={GithubLogo} width={24} height={24} alt='github icon' />;
}
