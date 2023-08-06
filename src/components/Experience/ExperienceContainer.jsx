import React from 'react';

import Experience from './Experience'
import getEntries from '@/utils/getEntries'
import { selectExperiences } from '@/utils/selectors';
import RevealAnimation from '../RevealAnimation/RevealAnimation';

async function ExperienceContainer() {

  const data = await getEntries('portfolio');

  const items = selectExperiences(data);

  return (
    <RevealAnimation direction='left'>
      <Experience
        title='Experience' 
        items={items}
      />
    </RevealAnimation>
  )
}

export default ExperienceContainer