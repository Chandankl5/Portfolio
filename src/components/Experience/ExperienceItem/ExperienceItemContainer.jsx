import React from 'react'
import ExperienceItem from './ExperienceItem'
import { selectExperienceItem, selectMedia } from '@/utils/selectors'

function ExperienceItemContainer({
  item
}) {

  const { from, to, numberOfYears, company, achievements, role, companyLogo } = selectExperienceItem(item) || {};

  const { url: companyLogoUrl } = selectMedia(companyLogo);

  return (
    <ExperienceItem 
      company={company}
      role={role}
      from={from}
      to={to}
      achievements={achievements}
      numberOfYears={numberOfYears}
      companyLogoUrl={`https:${companyLogoUrl}`}
    />
  )
}

export default ExperienceItemContainer