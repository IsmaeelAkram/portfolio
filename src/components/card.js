import { motion } from 'framer-motion';
export default function Card({ data, i }) {
	return (
		<motion.div
			className="card flex flex-col z-20 group cursor-pointer"
			initial={{ translateY: 30, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: (1 / 8) * i }}
		>
			{data.company.image && (
				<div className="flex justify-center items-center py-5">
					<img
						src={data.company.image}
						className="w-full group-hover:scale-110 transition-all rounded-lg"
					/>
				</div>
			)}
			<h2>{data.title}</h2>
			<h4 className="mb-5">
				@{' '}
				<a href={data.company.url} target="_blank">
					{data.company.name}
				</a>{' '}
				<span className="text-white">&bull;</span> {data.date}
			</h4>
			{data.body}
		</motion.div>
	);
}
