'use client';
import { motion } from 'framer-motion';

const badges = [
	{
		src: 'ccna.png',
		locked: true,
		url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html',
	},
	{
		src: 'ibm.png',
		locked: false,
		url: 'https://www.credly.com/badges/0e222fdb-82c8-4638-89b1-96f0cf375357/public_url',
	},
	{
		src: 'aws-devops.png',
		locked: true,
		url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
	},
];

export default function Badges() {
	return (
		<div className="grid grid-cols-3 w-full gap-10">
			{badges.map((badge, i) => (
				<motion.div
					initial={{ translateY: 30, opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: (1 / 8) * (i + 1) }}
					className="group flex justify-center items-center "
					key={i}
				>
					{badge.locked && (
						<img
							src="/cog.svg"
							className="absolute z-20 group-hover:cursor-pointer group-hover:rotate-180 transition-all duration-500"
						/>
					)}
					<a href={badge.url} className="border-none hover:border-none" target="_blank">
						<img
							src={badge.src}
							className={
								(badge.locked && 'opacity-40') +
								' w-full z-10 group-hover:cursor-pointer group-hover:scale-110 transition-all'
							}
						/>
					</a>
				</motion.div>
			))}
		</div>
	);
}
