'use client';

import { motion } from 'framer-motion';
import MyImage from '../myImage';
import Badges from '../badges';
import useWindowSize from '@/utils/useWindowSize';

const headings = [
	{
		emoji: 'laptop.png',
		text: 'Full-stack Software Engineer',
	},
	{
		emoji: 'plug.png',
		text: 'Cloud DevOps Engineer',
	},
	{
		emoji: 'statue-of-liberty.png',
		text: 'Brooklyn, NY',
	},
	{
		emoji: 'grad-cap.png',
		text: 'Class of 2028',
	},
];

const skills = [
	{
		title: 'Cloud',
		items: [
			'AWS ⭐',
			'Google Cloud',
			'Linux ⭐',
			'Microservices',
			'Kubernetes',
			'Git',
			'Virtualization',
		],
	},
	{
		title: 'Languages',
		items: ['Python ⭐', 'JavaScript ⭐', 'C/C++ ⭐', 'Go ⭐', 'Java', 'SQL', 'C#'],
	},
	{
		title: 'Frontend',
		items: [
			'Next.js ⭐',
			'Tailwind.css ⭐',
			'WebGL',
			'React Native ⭐',
			'REST/WebSockets ⭐',
			'Figma',
			'Framer Motion',
		],
	},
	{
		title: 'Networking',
		items: [
			'Cisco Hardware',
			'AWS Cloud Networks ⭐',
			'Private networks',
			'Wireless networks',
			'Subnetting ⭐',
			'Firewalls',
		],
	},
	{
		title: 'Databases',
		items: ['MySQL ⭐', 'PostgreSQL', 'MongoDB ⭐', 'Cassandra', 'Oracle', 'Redis ⭐', 'DynamoDB'],
	},
];

export default function About() {
	const { width } = useWindowSize();
	return (
		<div className="grid grid-cols-8 grid-rows-auto h-full">
			<div className="sm:col-span-6 col-span-8 flex flex-col">
				<div className="flex flex-col gap-2">
					{headings.map((heading, i) => (
						<motion.div
							initial={{ translateY: 30, opacity: 0 }}
							animate={{ translateY: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: (1 / 8) * (i + 1) }}
							className="flex flex-row justify-start items-center gap-8"
							key={i}
						>
							<img src={heading.emoji} className="emoji" />
							<h2>{heading.text}</h2>
						</motion.div>
					))}
				</div>
				<div className="sm:mt-auto mt-5">
					<motion.h2
						initial={{ translateY: 30, opacity: 0 }}
						animate={{ translateY: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: (1 / 8) * headings.length }}
						className="font-bold mb-3"
					>
						Technologies
						{/* <span className="text-lg text-purple-400">(my best)</span> */}
					</motion.h2>
					<div className="grid grid-cols-2 sm:grid-cols-5 w-full">
						{skills.map((skill, i) => (
							<div key={i} className="mb-5 sm:mb-0">
								<motion.h3
									initial={{ translateY: 30, opacity: 0 }}
									animate={{ translateY: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: (1 / 8) * headings.length }}
									className="font-bold mb-1"
								>
									{skill.title}:
								</motion.h3>
								<ul className="list-disc list-inside">
									{skill.items.map((item, j) => {
										const isSpecial = item.includes('⭐');
										const displayItem = isSpecial ? item.replace(' ⭐', '') : item;
										return (
											<motion.li
												initial={{ translateY: 30, opacity: 0 }}
												animate={{ translateY: 0, opacity: 1 }}
												transition={{ duration: 0.8, delay: (1 / 8) * headings.length * (j + 1) }}
												key={j}
												className={isSpecial ? 'text-purple-400 font-bold ' : ''}
											>
												{displayItem}
											</motion.li>
										);
									})}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
			{width > 640 && (
				<div className="sm:col-span-2 flex justify-start items-center">
					<div className="grid auto-rows-auto">
						<div className="flex justify-center items-center">
							<MyImage />
						</div>
						<div className="flex justify-center items-center my-4">
							<Badges />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
