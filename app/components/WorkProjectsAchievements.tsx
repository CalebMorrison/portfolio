'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Work Projects & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Work Projects */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-purple-400">Work Projects</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Data Verification</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Extracted and structured data from various external APIs into application models for comparison with user-entered data</li>
									<li>• Utilized Cheerio to scrape and parse HTML content, mapping the data into models for validation and analysis</li>
									<li>• Leveraged internal APIs to cross-reference rosters from major North American sports leagues (NFL, NBA, MLB, NHL) with data ingested from external sources</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Browser Applications</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Maintained and enhanced a legacy Java 8 application utilizing Hibernate for sports database management</li>
									<li>• Supported and improved a Node.js/JavaScript application used for real-time sports data entry</li>
									<li>• Contributed to the development of an AngularJS application designed to consolidate and replace legacy systems</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-purple-400">Development & Leadership</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Code Quality</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Replaced deprecated functionality with modern, supported packages in a JavaScript/Node.js application</li>
									<li>• Ensured both legacy and new applications adhered to the organization&#39;s Software Development Life Cycle standards</li>
									<li>• Contributed to Git-based code reviews to maintain code quality and ensure alignment with CI/CD best practices</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Team Impact</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Mentored a team of three junior developers, providing guidance on best practices, code quality, and professional growth</li>
									<li>• Collaborated in an Agile/Scrum environment to support iterative development and timely delivery of features</li>
									<li>• Authored detailed runbooks and led knowledge transfer sessions to ensure continuity and team-wide understanding of systems and workflows</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
