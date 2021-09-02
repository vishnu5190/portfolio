import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
        

      </SectionTitle>
      <SectionText>
        The purpose of my life is to work in some big company or build a company from scratch if u would help me.
      </SectionText>
      <Button onClick={() => Window.location = "http://google.com"}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;