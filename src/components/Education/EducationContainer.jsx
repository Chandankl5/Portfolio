import React from 'react'
import Education from './Education'
import { selectEducation } from '@/utils/selectors';
import getEntries from '@/utils/getEntries';

async function EducationContainer() {

  const data = await getEntries('portfolio');

  const items = selectEducation(data);

  return (
    <Education 
      title='Education'
      items={items}
    />
  )
}

export default EducationContainer