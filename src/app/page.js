import Badges from '@/components/badges';
import Content from '@/components/content';
import Logo from '@/components/logo';
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
					<Logo />
				</div>
				<div className="col-span-2">
					<div className="flex flex-row justify-end items-center gap-5 h-full">
						{socials.map((social, i) => (
							<SocialIcon social={social} key={i} i={i} />
						))}
					</div>
				</div>
			</div>
			<div className="grid grid-cols-8 w-full mt-8 gap-10">
				<div className="col-span-6 flex justify-start items-start w-full h-full">
					<Content />
				</div>
				<div className="col-span-2 flex justify-start items-start">
					<div className="grid auto-rows-auto">
						<div className="flex justify-center items-center">
							<img src="/IMG_6027.png" className="w-full my-image object-cover" />
						</div>
						<div className="flex justify-center items-center mt-4">
							<Badges />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
