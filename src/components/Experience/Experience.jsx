import React from 'react';

import styles from './Experience.module.css'
import { TimeLine } from '../TimeLine';
import ExperienceItemContainer from './ExperienceItem/ExperienceItemContainer';

function Experience({
  title,
  items = []
}) {

  return (
    <div className={styles.experience}>
      <h3 className={styles.title}>{title}</h3>
      <TimeLine>
        {items.map((item, index) => <TimeLine.Item key={index}><ExperienceItemContainer item={item} /></TimeLine.Item>)}
      </TimeLine>
    </div>
  )
}

export default Experience