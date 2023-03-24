import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
        <SectionTitle main center>
          Hi, my name is <br />
          Akshat Rawat
        </SectionTitle>
        <SectionText>
  I’m a software engineer who likes to build on 
things on the web with clean UI and good digital experiences.<br/>
Currently, I’m focused more on Full Stack Web Development, web3.0.<br/>
And I’m also interested in big data.
        </SectionText>
    {/*<Button onClick={props.handleClick}>Resume</Button>*/}
    <Button onClick={() => window.open('https://drive.google.com/file/d/1mTrnNIcwpYaAuPyXttW9euLB5t671lGn/view', '_blank')}>Resume</Button>
      </LeftSection>
  </Section>
);

export default Hero;