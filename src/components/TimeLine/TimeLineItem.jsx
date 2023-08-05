import React from 'react'

import styles from './TimeLine.module.css';

function TimeLineItem({
  children
}) {
  return (
    <div className={styles.timeLineItem}>
      <div className={styles.colLeft}>
        <div className={styles.timeLineDot} />
        <div className={styles.timeLineSeparator} />
      </div>
      <div className={styles.colRight}>
        {children}    
      </div>
    </div>
  )
}

export default TimeLineItem