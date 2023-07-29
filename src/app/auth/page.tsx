'use client'
import React, { useEffect, useRef } from 'react'
import HdvI from '../_components/HdvI'
import HdvII from '../_components/HdvII'
import HdvIII from '../_components/HdvIII'
import HdvIV from '../_components/HdvIV'
import HdvV from '../_components/HdvV'
import HdvVI from '../_components/HdvVI'
import HdvVII from '../_components/HdvVII'
import HdvVIII from '../_components/HdvVIII'
import HdvIX from '../_components/HdvIX'
import HdvX from '../_components/HdvX'
import HdvXI from '../_components/HdvXI'
import HdvXII from '../_components/HdvXII'
import useObserver from '../hooks/useObserver'
const hdvElementList = [
  HdvI,
HdvII,
HdvIII,
HdvIV,
HdvV,
HdvVI,
HdvVII,
HdvVIII,
HdvIX,
HdvX,
HdvXI,
HdvXII,

]
const Page = () => {
  const elementIds = hdvElementList.map((_, index) => `${index}`);
  const { setElements, entries} = useObserver({
    threshold:0.2, root:null
  })
  const elementsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // When the component mounts, populate elementsRefs with refs to each element
    elementsRefs.current = elementsRefs.current.slice(0, hdvElementList.length).map((_, index) => elementsRefs.current[index] || null);
  }, []);

  useEffect(() => {
    // When the observer entries change, update the visibility of components
    entries.forEach((entry, index) => {
      if (entry.intersectionRatio > 0.05) {
        elementsRefs.current[index]?.classList.remove('hidden');
      } else {
        elementsRefs.current[index]?.classList.add('hidden');
      }
    });
  }, [entries]);
  return (
 <div className='mt-16 flex flex-col items-center space-y-6 p-12'>
      {hdvElementList.map((Component, index) => (
        <div
          key={index}
          id={`${index}`}
          ref={(el) => (elementsRefs.current[index] = el)}
          // className={`transition-opacity duration-500 ${index === 0 ? 'block' : 'hidden'}`}
        >
          <Component />
        </div>
      ))}
    </div>
  )
}

export default Page 