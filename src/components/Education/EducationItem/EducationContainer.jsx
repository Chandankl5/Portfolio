import React from 'react'
import EducationItem from './EducationItem'
import { selectEducationItem, selectMedia } from '@/utils/selectors'

function EducationContainer({
  item
}) {

  const { university, degree, start, end, universityLogo } = selectEducationItem(item); 

  const { url: universityLogoUrl } = selectMedia(universityLogo);

  return (
    <EducationItem 
      university={university}
      degree={degree}
      start={start}
      end={end}
      universityLogoUrl={`https:${universityLogoUrl}`}
    />
  )
}

export default EducationContainer