import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode,Img } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
 Hello! I'm Askhat Rawat.<br/>
web developer, Student, and Minimalist.<br/>
I'm a 22-year-old student at the university institute of technology currently
studying computer science engineering, 
and I enjoy creating things that live on the internet.
   
      </SectionText>

    </Section>
  );
};

export default Timeline;
