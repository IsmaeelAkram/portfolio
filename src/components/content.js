'use client';

import { useState } from 'react';

const pages = [
	{ title: 'About me', id: 'about' },
	{ title: 'Experience', id: 'experience' },
	{ title: 'Projects', id: 'projects' },
	{ title: 'Blog', id: 'blog' },
	{ title: 'Résumé', id: 'resume' },
];

export default function Content() {
	const [selected, setSelected] = useState('about');
	return (
		<div className="nav grid grid-cols-5 w-full">
			{pages.map((page) => (
				<div className="flex justify-start items-center">
					<p
						className={
							'hover:text-white transition-all cursor-pointer ' +
							(selected === page.id && '!text-white !font-bold')
						}
						onClick={() => setSelected(page.id)}
					>
						{page.title}
					</p>
				</div>
			))}
		</div>
	);
}
