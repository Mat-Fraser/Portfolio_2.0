import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, TechStack } from './MiniprojectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { miniprojects } from '../../constants/constants';

const Miniprojects = () => (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Other Noteworthy Projects</SectionTitle>
      <GridContainer>
        {miniprojects.map((p, i) => {
          return (
            <BlogCard key={i}>
            <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent><TechStack>Tech Stack</TechStack></TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>LIVE</ExternalLinks>
                <ExternalLinks href={p.source}>Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
  
  export default Miniprojects;