import React from 'react'

import styles from './Skills.module.css';
import SkillItemContainer from './SkillItem/SkillItemContainer';

function Skills({
  title,
  items = []
}) {
  return (
    <div className={styles.skills}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {items.map((label) => <SkillItemContainer key={label} label={label} />)}
      </div>
    </div>
  )
}

export default Skills