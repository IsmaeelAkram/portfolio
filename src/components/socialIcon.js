'use client';

import { motion } from 'framer-motion';

export default function SocialIcon({ social, i }) {
	return (
		<motion.div
			initial={{ translateY: 30, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: (1 / 8) * (i + 1) }}
		>
			<img
				src={`/${social.src}.svg`}
				className="w-3/5 sm:w-4/5 sm:h-1/2 hover:opacity-50 hover:cursor-pointer transition-all"
				onClick={() => window.open(social.href)}
			/>
		</motion.div>
	);
}
