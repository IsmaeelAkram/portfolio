'use client';

import { motion } from 'framer-motion';

const headings = [
	{
		emoji: 'laptop.png',
		text: 'FULL-STACK SOFTWARE DEVELOPER',
	},
	{
		emoji: 'plug.png',
		text: 'SYSTEMS ADMINISTRATOR',
	},
	{
		emoji: 'statue-of-liberty.png',
		text: 'NEW YORK CITY',
	},
	{
		emoji: 'grad-cap.png',
		text: 'BROOKLYN COLLEGE',
	},
];

const skills = [
	{
		title: 'Cloud',
		items: ['AWS', 'Google Cloud', 'Linux', 'Microservices', 'Kubernetes', 'Git', 'Virtualization'],
	},
	{
		title: 'Languages',
		items: ['Python', 'JavaScript', 'C/C++', 'Go', 'Java', 'SQL', 'C#'],
	},
	{
		title: 'Frontend',
		items: [
			'Next.js',
			'React.js',
			'Tailwind.css',
			'React Native',
			'REST',
			'WebSockets',
			'Framer Motion',
		],
	},
	{
		title: 'Networking',
		items: ['Cisco', 'TCP/UDP', 'IPv4/IPv6', 'Wi-Fi', 'VLAN', 'VPNs', 'Automation'],
	},
	{
		title: 'Databases',
		items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Oracle', 'Redis', 'DynamoDB'],
	},
];

export default function About() {
	return (
		<>
			{headings.map((heading, i) => (
				<motion.div
					initial={{ translateY: 30, opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: (1 / 8) * (i + 1) }}
					className="flex flex-row justify-start items-center gap-8 mb-2"
					key={i}
				>
					<img src={heading.emoji} className="emoji" />
					<h2>{heading.text}</h2>
				</motion.div>
			))}
			<div>
				<motion.h2
					initial={{ translateY: 30, opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: (1 / 8) * headings.length }}
					className="font-bold mt-10 mb-3"
				>
					Skills
				</motion.h2>
				<div className="grid grid-cols-5 w-full">
					{skills.map((skill, i) => (
						<div key={i}>
							<motion.h3
								initial={{ translateY: 30, opacity: 0 }}
								animate={{ translateY: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: (1 / 8) * headings.length }}
								className="font-bold mb-1"
							>
								{skill.title}:
							</motion.h3>
							<ul className="list-disc list-inside">
								{skill.items.map((item, j) => (
									<motion.li
										initial={{ translateY: 30, opacity: 0 }}
										animate={{ translateY: 0, opacity: 1 }}
										transition={{ duration: 0.8, delay: (1 / 8) * headings.length * (j + 1) }}
										key={j}
									>
										{item}
									</motion.li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
