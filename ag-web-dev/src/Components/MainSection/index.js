import React from 'react';
import video from '../../Videos/shortvideo.mp4'
import { MainContainer, MainBackground, VideoBackground, HeroSection, HeroH1, HeroP } from './MainElements';
export const MainSection = () => {
    return(
        <MainContainer>
            <MainBackground>
                <VideoBackground autoPlay loop muted src={video} type='video/mp4'/>
            </MainBackground>
            <HeroSection>
                <HeroH1>Alex Gonzalez</HeroH1>
                <HeroP>React Software Developer</HeroP>
            </HeroSection>
        </MainContainer>
    )
}