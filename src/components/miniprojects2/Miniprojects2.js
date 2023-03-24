import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, TechStack } from './MiniprojectsStyles2';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { miniprojects2 } from '../../constants/constants';

const Miniprojects2 = () => (
    <Section nopadding id="projects">
      <GridContainer>
        {miniprojects2.map((p, i) => {
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
                <ExternalLinks href={p.visit}>Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
  
  export default Miniprojects2;