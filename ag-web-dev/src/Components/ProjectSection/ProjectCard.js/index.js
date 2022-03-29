import React from 'react'
import {Card, ImageWrapper, DescriptionWrapper, BulletList,BulletPoint, Image, ButtonWrapper } from './ProjectCardElements'
import { Button } from '../../ButtonElement'
export const ProjectCard = ({img,description,bulletone,bullettwo,bulletthree,bulletfour,alt, website, repo}) => {
  return (
    <Card>
    <ImageWrapper>
        <Image src={img} alt={alt}/>
    </ImageWrapper>
    <DescriptionWrapper>
        <BulletList>
            <BulletPoint>{bulletone}</BulletPoint>
            <BulletPoint>{bullettwo}</BulletPoint>
            <BulletPoint>{bulletthree}</BulletPoint>
            <BulletPoint>{bulletfour}</BulletPoint>
        </BulletList>
        <ButtonWrapper>
            <Button as='a' href={website} target='_blank'>Live App</Button>
            <Button as='a' href={repo} target='_blank'>Repo</Button>
  
        </ButtonWrapper>
    </DescriptionWrapper>
</Card>
)
}

