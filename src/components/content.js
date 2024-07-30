'use client';

import { useEffect, useState } from 'react';
import About from './minipages/about';
import Experience from './minipages/experience';
import { motion } from 'framer-motion';
import Projects from './minipages/projects';
import { usePathname, useRouter } from 'next/navigation';

const pages = [
	{ title: 'About me', id: '', component: <About /> },
	{ title: 'Experience', id: 'experience', component: <Experience /> },
	{ title: 'Projects', id: 'projects', component: <Projects /> },
	// { title: 'Blog', id: 'blog' },
	{ title: 'Résumé', id: 'resume' },
];

export default function Content() {
	const pathname = usePathname();
	const router = useRouter();
	const [selected, setSelected] = useState(
		pathname === '/' ? pages[0] : pages.find((page) => page.id === pathname.slice(1))
	);

	useEffect(() => {
		setSelected(pages.find((page) => page.id === pathname.slice(1)));
	}, [pathname]);

	return (
		<div className="w-full">
			<div className="nav grid grid-cols-4 w-full">
				{pages.map((page, i) => (
					<motion.div
						initial={{ translateY: 30, opacity: 0 }}
						animate={{ translateY: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: (1 / 8) * (i + 1) }}
						className="flex justify-center sm:justify-start items-center w-full"
						key={page.id}
					>
						<p
							className={
								'hover:text-white transition-all cursor-pointer ' +
								(selected === page && '!text-white !font-bold')
							}
							onClick={() => {
								if (page.id == 'resume') {
									window.open('Resume.pdf');
									return;
								}
								router.push('/' + page.id);
							}}
						>
							{page.title}
						</p>
					</motion.div>
				))}
			</div>
			<div className="mb-0 sm:mb-10 mt-5 sm:mt-10 w-full">{selected.component}</div>
		</div>
	);
}
