import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { GiBullHorns } from 'react-icons/gi';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
 <LinkList>
   <LinkColumn>
     <LinkTitle>Phone No.</LinkTitle>
     <LinkItem href="tel:98825-20451">+91 98825-20451</LinkItem>
   </LinkColumn>
   <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href="akshatar2002@gmail.com">
     akshatar1803@gmail.com
     </LinkItem>
   </LinkColumn>
 </LinkList>
 <SocialIconsContainer>
   <CompanyContainer>   
      <GiBullHorns size="4rem" />
     <Slogan>Feel free to reach out if you're looking for a developer, or just want to connect.</Slogan>
     </CompanyContainer>
   <SocialContainer>
     <SocialIcons href="https://github.com/Mat-Fraser">
       <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/akshat-rawat-b708441b1">
       <FaLinkedinIn size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.instagram.com/akshat_rawat0007">
       <AiFillInstagram size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://twitter.com/i_m_akshatrawat?t=suxhuNq5ZTjRi_CY2_6iGw&s=09">
        <FaTwitter size="3rem"/>
      </SocialIcons>
   </SocialContainer>
 </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
