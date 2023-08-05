import React from 'react'
import TimeLineItem from './TimeLineItem'

import styles from './TimeLine.module.css';

function TimeLine({
  children
}) {
  return (
    <div className={styles.timeline}>
      {children}
    </div>
  )
}

TimeLine.Item = TimeLineItem;

export default TimeLine;