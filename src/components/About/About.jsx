import React from 'react';

import styles from './About.module.css';
import Image from 'next/image';
import SocialLinks from '../SocialLinks/SocialLinks';

function About({
  name,
  designation,
  description,
  photoUrl
}) {

  return (
    <div className={styles.about}>
      <div className={styles.colLeft}>
        <h1 className={styles.titleH1}>{name}</h1>
        <h2 className={styles.titleH2}>{designation}</h2>
        <div className={styles.desc} >{description}</div>
        <SocialLinks />
      </div>
      <div className={styles.colRight}>
        <Image
          src={photoUrl}
          className={styles.profileImg}
          alt='profile-img'
          width={256}
          height={256}
        />
      </div>
    </div>
  )
}

export default About