import styles from './page.module.css'

import AboutContainer from '@/components/About/AboutContainer';
import ExperienceContainer from '@/components/Experience/ExperienceContainer';
import ProjectsContainer from '@/components/Projects/ProjectsContainer';
import SkillsContainer from '@/components/Skills/SkillsContainer';
import EducationContainer from '@/components/Education/EducationContainer';
import RevealAnimation from '@/components/RevealAnimation/RevealAnimation';

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutContainer />
      <ExperienceContainer />
      <ProjectsContainer />
      <SkillsContainer />
      <EducationContainer />
      <RevealAnimation direction='left'>
        <div className={styles.footerText}>Made with <span>❤️</span> by Chandan KL</div>
      </RevealAnimation>
    </main>
  )
}
