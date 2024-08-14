import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Samuel';

export const lastName = 'Dang';

export const description =
	'Frontend developer with around 4 years of experience in JavaScript, TypeScript, React.js, and Next.js, along with other frontend technologies. I also have a basic understanding of Node.js, databases, and foundational IT concepts like data structures, algorithms, and performance optimization. My expertise lies in building dynamic, responsive, and efficient web applications that deliver a seamless user experience.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/kingsley1996' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/linhdangdev96/'
	},
	{
		platform: Platform.Email,
		link: 'linhdang.dev96@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@CodeWithSamuel-VN'
	},
	{
		platform: Platform.Tiktok,
		link: 'https://www.tiktok.com/@codewithsamuel96'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
