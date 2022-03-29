import React from 'react'
import {Card, ImageWrapper, DescriptionWrapper, BulletList,BulletPoint, Image } from './ProjectCardElements'
export const ProjectCard = ({img,description,bulletone,bullettwo,bulletthree,bulletfour,alt}) => {
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
    </DescriptionWrapper>
</Card>
)
}

