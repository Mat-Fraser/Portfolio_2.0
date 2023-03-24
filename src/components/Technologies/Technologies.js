import React from 'react';
import { DiReact, DiCss3,DiBootstrap,DiMysql,DiHeroku } from 'react-icons/di';
import { AiFillHtml5,AiOutlineGithub  } from 'react-icons/ai';
import { SiJavascript, SiTailwindcss,SiMaterialui, SiGatsby, SiNetlify, SiVercel,SiFirebase,SiMongodb,SiPostgresql,SiVisualstudiocode,SiTypescript,SiStyledcomponents,SiTestinglibrary,SiJava,SiGraphql } from 'react-icons/si';
import { FaGit,FaNodeJs,FaCcStripe,FaPython,FaSass,FaAws,FaDocker } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tech Stack</SectionTitle>
    <ListParagraph>Technologies I personally like to work with</ListParagraph>
    <List>
    <ListItem>    
    <picture>
          <AiFillHtml5 size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <DiCss3 size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <DiBootstrap size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiTailwindcss size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiJavascript size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <DiReact size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiMaterialui size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <TbBrandNextjs size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <FaNodeJs size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <FaGit size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <AiOutlineGithub size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <DiMysql size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiGatsby size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiNetlify size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiVercel size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiFirebase size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiMongodb size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiPostgresql size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <FaCcStripe size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <SiVisualstudiocode size="8rem" />
    </picture>
    </ListItem>

    <ListItem>    
    <picture>
          <SiTypescript size="8rem" />
    </picture>
    </ListItem>
    <ListItem>    
    <picture>
          <FaSass size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <SiStyledcomponents size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <SiTestinglibrary size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <DiHeroku size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <SiJava size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <FaAws size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <SiGraphql size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <FaDocker size="8rem" />
    </picture>
    </ListItem>
          <ListItem>    
    <picture>
          <FaPython size="8rem" />
    </picture>
    </ListItem>
      
    </List>
   <SectionDivider divider />
  </Section>
);

export default Technologies;
