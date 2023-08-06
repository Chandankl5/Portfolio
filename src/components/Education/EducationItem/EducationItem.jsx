import React from 'react'

import styles from './EducationItem.module.css';
import Image from 'next/image';

function EducationItem({
  university,
  degree,
  start,
  end,
  universityLogoUrl
}) {
  return (
    <div className={styles.item}>
      <div className={styles.row}>
        <div className={styles.colLeft}>
          <Image
            src={universityLogoUrl}
            height={92}
            width={110}
            alt='University Logo'
          />
        </div>
        <div className={styles.colRight}>
          <div className={styles.title}>{university}</div>
          <div className={styles.subtitle}>{degree}</div>
          <div className={styles.text}>{start} - {end}</div>
        </div>
      </div>
    </div>
  )
}

export default EducationItem