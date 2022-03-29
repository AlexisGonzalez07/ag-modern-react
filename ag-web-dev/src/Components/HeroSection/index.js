import React from "react";
import Video from "../../Videos/shortvideo.mp4";
import {
  MainContainer,
  MainBackground,
  VideoBackground,
  TextSection,
  HeroH1,
  HeroP,
} from "./HeroElements";
export const HeroSection = () => {
  return (
    <MainContainer>
      <MainBackground>
          <video autoPlay loop muted id='video'>
              <source src={Video} type='video/mp4'/>
          </video>
        {/* <VideoBackground autoPlay loop muted src={Video} type="video/mp4" /> */}
      </MainBackground>
      <TextSection>
        <HeroH1>Alex Gonzalez</HeroH1>
        <HeroP>React Software Developer</HeroP>
      </TextSection>
    </MainContainer>
  );
};
