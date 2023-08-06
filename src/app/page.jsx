import styles from './page.module.css'

import AboutContainer from '@/components/About/AboutContainer';
import ExperienceContainer from '@/components/Experience/ExperienceContainer';
import ProjectsContainer from '@/components/Projects/ProjectsContainer';
import SkillsContainer from '@/components/Skills/SkillsContainer';
import EducationContainer from '@/components/Education/EducationContainer';

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutContainer />
      <ExperienceContainer />
      <ProjectsContainer />
      <SkillsContainer />
      <EducationContainer />
    </main>
  )
}
