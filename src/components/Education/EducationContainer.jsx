import React from 'react'
import Education from './Education'
import { selectEducation } from '@/utils/selectors';
import getEntries from '@/utils/getEntries';
import RevealAnimation from '../RevealAnimation/RevealAnimation';

async function EducationContainer() {

  const data = await getEntries('portfolio');

  const items = selectEducation(data);

  return (
    <RevealAnimation>
      <Education 
        title='Education'
        items={items}
      />
    </RevealAnimation>
  )
}

export default EducationContainer