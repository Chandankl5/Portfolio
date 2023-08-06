import React from 'react'
import Skills from './Skills'
import getEntries from '@/utils/getEntries';
import { selectSkills } from '@/utils/selectors';
import RevealAnimation from '../RevealAnimation/RevealAnimation';

async function SkillsContainer() {

  const data = await getEntries('portfolio');

  const items = selectSkills(data) || {};
  
  return (
    <RevealAnimation direction='left'>
      <Skills 
        title='Skills'
        items={items}
      />
    </RevealAnimation>
  )
}

export default SkillsContainer