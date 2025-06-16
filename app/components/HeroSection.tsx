'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-purple-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Caleb Morrison</h1>
						<p className="text-gray-400 mb-2">Software Developer</p>
						<p className="text-purple-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">Node.js</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">Javascript</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">Java</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">Typescript</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">HTML</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">CSS</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">AngularJS</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">SQL</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">RestAPI</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">Linux</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">Git</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">Jira</span>
							<span className="px-3 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">AWS</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
