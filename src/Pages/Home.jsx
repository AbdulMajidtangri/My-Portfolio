import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ProjectsSection from '../Components/ProjectsSection';
import SkillsSection from '../Components/SkillsSection';
import Education from '../Components/Education';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Education />
    </>
  );
};

export default Home;