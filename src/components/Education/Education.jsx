import React from 'react'

import styles from './Education.module.css';
import EducationContainer from './EducationItem/EducationContainer';

function Education({
  title,
  items = []
}) {
  return (
    <div className={styles.education}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {items.map((item, index) => <EducationContainer key={index} item={item} />)}
      </div>
    </div>
  )
}

export default Education