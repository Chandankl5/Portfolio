import React from 'react'

import styles from './Projects.module.css';
import ProjectItemContainer from './ProjectItem/ProjectItemContainer';

function Projects({
  title,
  items = []
}) {
  return (
    <div className={styles.projects}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.projectsList}>
        {items.map((item, index) => <ProjectItemContainer key={index} item={item} />)}
      </div>
    </div>
  )
}

export default Projects