import React from 'react'

import About from './About';

import getEntries from '@/utils/getEntries'
import { selectAbout, selectMedia } from '@/utils/selectors';

async function AboutContainer() {
  
  const data = await getEntries('portfolio')

  const { name, designation, description, photo } = selectAbout(data);
  const { url: photoUrl } = selectMedia(photo) || {};

  return (
    <About 
      name={name}
      description={description}
      designation={designation}
      photoUrl={`https:${photoUrl}`}
    />
  )
}

export default AboutContainer