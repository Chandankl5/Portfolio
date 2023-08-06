'use client';

import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './RevealAnimation.module.css'

function RevealAnimation({
  intersect = true,
  direction='right',
  children
}) {

  const targetRef = useRef(null);

  const [ isIntersecting, setIsIntersecting ] = useState(false);


  useEffect(() => {
    let visibilitySensor = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setIsIntersecting(true)
        }
      })
    });

    visibilitySensor.observe(targetRef.current);
  }, [])

  const classNames = cn({
    [styles.slideLeft]: direction === 'left' && (isIntersecting || !intersect),
    [styles.slideRight]: direction === 'right' && (isIntersecting || !intersect)
  })

  return (
    <div ref={targetRef}>
      <div className={classNames}>
          {children}
      </div>
    </div>
  )
}

export default RevealAnimation