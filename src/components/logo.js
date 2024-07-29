'use client';
import { motion } from 'framer-motion';

export default function Logo() {
	return (
		<motion.img
			initial={{ translateY: 30, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: 1 / 8 }}
			src="/logo.svg"
			className="h-full"
		/>
	);
}
