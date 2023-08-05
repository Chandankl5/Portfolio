import React from 'react';

import Experience from './Experience'
import getEntries from '@/utils/getEntries'
import { selectExperiences } from '@/utils/selectors';

async function ExperienceContainer() {

  const data = await getEntries('portfolio');

  const items = selectExperiences(data);

  return (
    <Experience
      title='Experience' 
      items={items}
    />
  )
}

export default ExperienceContainer