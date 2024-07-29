import Badges from '@/components/badges';
import Content from '@/components/content';
import SocialIcon from '@/components/socialIcon';
import Image from 'next/image';

const socials = [
	{ src: 'linkedin', href: 'https://linkedin.com/in/ismaeelakram' },
	{ src: 'github', href: 'https://github.com/ismaeelakram' },
	{ src: 'mail', href: 'mailto:ismaeel@ismaeelakram.com' },
];

export default function Home() {
	return (
		<div className="w-full h-screen p-10">
			<div className="grid grid-cols-6 w-full">
				<div className="flex justify-start items-center col-span-4 h-full">
					<img src="/logo.svg" className="h-full" />
				</div>
				<div className="col-span-2">
					<div className="flex flex-row justify-end items-center gap-5 h-full">
						{socials.map((social) => (
							<SocialIcon social={social} key={social} />
						))}
					</div>
				</div>
			</div>
			<div className="grid grid-cols-8 auto-cols-auto w-full mt-8">
				<div className="col-span-6 flex justify-start items-start w-full h-full">
					<Content />
				</div>
				<div className="col-span-2 flex justify-center items-center">
					<div className="grid auto-rows-auto h-full">
						<div className="flex justify-center items-center">
							<img src="/IMG_6027.png" className="h-full my-image object-cover" />
						</div>
						<div className="flex justify-center items-center mt-2">
							<Badges />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
