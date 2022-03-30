import React from 'react'
import { SectionWrapper, SectionContainer } from './InfoElements'
import { sectionOne,sectionTwo,sectionThree,sectionFour } from './data'
import { SingleSection } from './singleSection'
export const InfoSection = () => {
  return (
    <SectionWrapper>
        <SectionContainer>
          <SingleSection {...sectionOne}/>
          <SingleSection {...sectionTwo}/>
          <SingleSection {...sectionThree}/>
          <SingleSection {...sectionFour}/>
        </SectionContainer>
    </SectionWrapper>
  )
}
