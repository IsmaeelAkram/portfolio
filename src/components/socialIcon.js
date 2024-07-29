'use client';

export default function SocialIcon({ social }) {
	return (
		<img
			src={`/${social.src}.svg`}
			className="h-1/2 hover:opacity-50 hover:cursor-pointer transition-all"
			onClick={() => window.open(social.href)}
		/>
	);
}
