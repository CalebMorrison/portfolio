'use client';

import HeroSection from './components/HeroSection';
import SystemArchitecture from './components/PersonalProjects';
import TechnicalMetrics from './components/WorkProjectsAchievements';
import ContactSection from './components/ContactSection';

export default function softwareDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<SystemArchitecture />
			<TechnicalMetrics />
			<ContactSection />
		</main>
	);
}
