import About from './minipages/about';
import { useState } from 'react';
import Experience from './minipages/experience';
import gsap from 'gsap';

export default function Content() {
	const [selectedPage, setSelectedPage] = useState('about');

	function animateTo(dest) {
		gsap.to('.content', {
			duration: 0.2,
			opacity: 0,
			translateY: -10,
			onComplete: () => {
				setSelectedPage(dest);
				gsap.to('.content', {
					duration: 0.2,
					opacity: 1,
					translateY: 0,
				});
			},
		});
	}

	return (
		<div>
			<ul className="nav">
				<li onClick={() => animateTo('about')} className={selectedPage === 'about' ? 'active' : ''}>
					About me
				</li>
				<li
					onClick={() => animateTo('experience')}
					className={selectedPage === 'experience' ? 'active' : ''}
				>
					Experience / Projects
				</li>
				<li
					onClick={() => {
						window.open('/Resume.pdf', '_blank');
					}}
				>
					Resumé
				</li>
			</ul>

			<div className="content">
				{selectedPage === 'about' && <About />}
				{selectedPage === 'experience' && <Experience />}
			</div>
		</div>
	);
}
