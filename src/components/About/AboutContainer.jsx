import React from 'react'

import About from './About';

import getEntries from '@/utils/getEntries'
import { selectAbout, selectMedia } from '@/utils/selectors';
import RevealAnimation from '../RevealAnimation/RevealAnimation';

async function AboutContainer() {
  
  const data = await getEntries('portfolio')

  const { name, designation, description, photo } = selectAbout(data);
  const { url: photoUrl } = selectMedia(photo) || {};

  return (
    <RevealAnimation intersect={false}>
      <About 
        name={name}
        description={description}
        designation={designation}
        photoUrl={`https:${photoUrl}`}
      />
    </RevealAnimation>
  )
}

export default AboutContainer