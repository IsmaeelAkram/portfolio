'use client';
import { motion } from 'framer-motion';

const badges = [
	{
		src: 'ccna.png',
		locked: true,
	},
	{
		src: 'ibm.png',
		locked: false,
	},
	{
		src: 'aws-devops.png',
		locked: true,
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
					<img
						src={badge.src}
						className={
							(badge.locked && 'opacity-40') +
							' w-full z-10 group-hover:cursor-pointer group-hover:scale-110 transition-all'
						}
					/>
				</motion.div>
			))}
		</div>
	);
}
