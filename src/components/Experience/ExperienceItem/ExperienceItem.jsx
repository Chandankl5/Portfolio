import React from 'react'
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './ExperienceItem.module.css';

function ExperienceItem({
  company,
  role,
  from,
  to,
  numberOfYears,
  achievements,
  companyLogoUrl
}) {
  return (
    <div className={styles.item}>
      <div className={styles.row}>
        <div className={styles.colLeft}>
          <Image
            src={companyLogoUrl}
            width={48}
            height={48}
            alt='company-logo'
          />
        </div>
        <div className={styles.colRight}>
          <div className={styles.title}>{company}</div>
          <div >{numberOfYears}</div>
        </div>
      </div>
      <div>
        <div className={`${styles.lineItem} ${styles.title}`}>{role}</div>
        <div className={styles.lineItem}>{from} - {to}</div>
        <div className={styles.desc}>{documentToReactComponents(achievements)}</div>
      </div>
    </div>
  )
}

export default ExperienceItem