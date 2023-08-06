import React from 'react'
import Image from 'next/image';

import styles from './ProjectItem.module.css';
import IconLink from '@/components/Icons/IconLink';
import IconGit from '@/components/Icons/IconGit';

function ProjectItem({
  projectName, 
  projectDescription, 
  projectThumbnailUrl, 
  techStack,
  previewLink,
  codeLink
}) {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <Image
          src={projectThumbnailUrl}
          width={300}
          height={300}
          className={styles.thumbnail}
          alt='Project thumbnail'
        />
      </div>
      <div className={styles.itemBody}>
        <div className={styles.header}>{projectName}</div>
        <div className={styles.lineItem}>{projectDescription}</div>
        <div className={styles.lineItem}><b>Tech Stack: </b>{techStack}</div>
        <div className={styles.linkGroup}>
          <span>
            <IconLink /><b><a href={previewLink} target='_blank' className={styles.link}>Live Preview</a></b>
          </span>
          <span>
            <IconGit /><b><a href={codeLink} target='_blank' className={styles.link}>View Code</a></b>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem