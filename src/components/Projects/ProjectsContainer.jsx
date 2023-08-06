import React from 'react';

import Projects from './Projects'
import getEntries from '@/utils/getEntries';
import { selectProjects } from '@/utils/selectors';
import RevealAnimation from '../RevealAnimation/RevealAnimation';

async function ProjectsContainer() {

  const data = await getEntries('portfolio');

  const items = selectProjects(data);

  return (
    <RevealAnimation>
      <Projects
        title='Projects'
        items={items}
      />
    </RevealAnimation>
  )
}

export default ProjectsContainer