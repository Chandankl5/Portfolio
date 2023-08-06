import styles from './page.module.css'

import AboutContainer from '@/components/About/AboutContainer';
import ExperienceContainer from '@/components/Experience/ExperienceContainer';
import ProjectsContainer from '@/components/Projects/ProjectsContainer';

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutContainer />
      <ExperienceContainer />
      <ProjectsContainer />
    </main>
  )
}
