'use client';
import useWindowSize from '@/utils/useWindowSize';
import { motion } from 'framer-motion';

export default function MyImage() {
	const { width } = useWindowSize();
	return width < 768 ? (
		<></>
	) : (
		<motion.img
			initial={{ translateY: 30, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: 1 / 5 }}
			src="/me.png"
			className="w-full my-image object-cover"
		/>
	);
}
