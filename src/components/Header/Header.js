import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram,  AiOutlineCodepen } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { GiBullHorns } from 'react-icons/gi';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <GiBullHorns size="5rem" /><Span>Akshat Rawat</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech Stack</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Mat-Fraser">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/akshat_rawat0007">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/akshat-rawat-b708441b1">
          <FaLinkedinIn size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://twitter.com/i_m_akshatrawat?t=suxhuNq5ZTjRi_CY2_6iGw&s=09">
          <FaTwitter size="3rem"/>
        </SocialIcons>
         <SocialIcons href="https://codepen.io/matt-fraser">
          <AiOutlineCodepen size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
