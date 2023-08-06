import React from 'react';

import Projects from './Projects'
import getEntries from '@/utils/getEntries';
import { selectProjects } from '@/utils/selectors';

async function ProjectsContainer() {

  const data = await getEntries('portfolio');

  const items = selectProjects(data);

  return (
    <Projects
      title='Projects'
      items={items}
    />
  )
}

export default ProjectsContainer