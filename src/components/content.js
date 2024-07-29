'use client';

import { useState } from 'react';
import About from './minipages/about';

const pages = [
	{ title: 'About me', id: 'about', component: <About /> },
	{ title: 'Experience', id: 'experience' },
	{ title: 'Projects', id: 'projects' },
	{ title: 'Blog', id: 'blog' },
	{ title: 'Résumé', id: 'resume' },
];

export default function Content() {
	const [selected, setSelected] = useState(pages[0]);
	return (
		<div className="w-full">
			<div className="nav grid grid-cols-5 w-full">
				{pages.map((page) => (
					<div className="flex justify-start items-center w-full" key={page.id}>
						<p
							className={
								'hover:text-white transition-all cursor-pointer ' +
								(selected === page && '!text-white !font-bold')
							}
							onClick={() => setSelected(page)}
						>
							{page.title}
						</p>
					</div>
				))}
			</div>
			<div className="mt-10">{selected.component}</div>
		</div>
	);
}
