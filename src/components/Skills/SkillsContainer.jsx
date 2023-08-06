import React from 'react'
import Skills from './Skills'
import getEntries from '@/utils/getEntries';
import { selectSkills } from '@/utils/selectors';

async function SkillsContainer() {

  const data = await getEntries('portfolio');

  const items = selectSkills(data) || {};
  
  return (
    <Skills 
      title='Skills'
      items={items}
    />
  )
}

export default SkillsContainer