import React from 'react'
import {Card, ImageWrapper, DescriptionWrapper, BulletList,BulletPoint, Image, ButtonWrapper, OverlayDescription,OverlayTitle  } from './ProjectCardElements'
import { Button } from '../../ButtonElement'
export const ProjectCard = ({img,title,description, bulletone,bullettwo,bulletthree,bulletfour,alt, website, repo}) => {
  return (
    <Card>
    <ImageWrapper>
        <Image src={img} alt={alt}/>
        <OverlayDescription>Technologies: {description}</OverlayDescription>
        <OverlayTitle>{title}</OverlayTitle>
    </ImageWrapper>
    <DescriptionWrapper>

        <BulletList>
            <BulletPoint>{bulletone}</BulletPoint>
            <BulletPoint>{bullettwo}</BulletPoint>
            <BulletPoint className='noshow earlynoshow'>{bulletthree}</BulletPoint>
            <BulletPoint className='noshow'>{bulletfour}</BulletPoint>
        </BulletList>
        <ButtonWrapper>
            <Button as='a' href={website} target='_blank'>Live App</Button>
            <Button as='a' href={repo} target='_blank'>Github Repo</Button>
  
        </ButtonWrapper>
    </DescriptionWrapper>
</Card>
)
}

