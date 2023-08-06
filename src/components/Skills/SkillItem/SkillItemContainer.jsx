import React from 'react'
import SkillItem from './SkillItem'
import skillsIconsMap from '../SkillsIconsMap'

function SkillItemContainer({
  label
}) {

  let Icon = skillsIconsMap[label];

  return (
    <SkillItem 
      title={label}
      Icon={Icon}
    />
  )
}

export default SkillItemContainer