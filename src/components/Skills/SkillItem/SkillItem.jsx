import React from 'react'

import styles from './SkillItem.module.css';

function SkillItem({
  title,
  Icon
}) {
  return (
    <div className={styles.item}>
      <div className={styles.icon}><Icon /></div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default SkillItem