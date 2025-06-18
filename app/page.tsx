'use client';

import HeroSection from './components/HeroSection';
//import PersonalProjects from './components/PersonalProjects';
import WorkProjectsAchievements from './components/WorkProjectsAchievements';
import ContactSection from './components/ContactSection';

export default function softwareDeveloperPortfolio() {
	return (
		//re-add personalProgects when something completed <PersonalProjects />
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<WorkProjectsAchievements />
			<ContactSection />
		</main>
	);
}
