import styled from 'styled-components';

export const Img = styled.img`
  width:95%;
  height:90%;
  margin-top:1rem;
  object-fit: cover;
  overflow: hidden;
  border-radius:15px;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
padding: 1rem;
place-items: center;
column-gap: 1.5rem;
row-gap: 1rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const BlogCard = styled.div`
  border-radius: 25px;
  box-shadow: 4px 4px 25px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 315px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  margin-top:2rem;
  width: 100%;
`;
export const TechStack = styled.h2`
 color: #9cc9e3;
 text-decoration-line: underline;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 200px;
  height: 4px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(to left, #05ffd5, #00f5f4, #00e8ff, #5dd9ff, #8ecaff, #a9bdff, #d3abfe, #fc95e2, #ff7fbc, #ff708b, #ff6f54, #ff7b00);
  border-radius: 25px;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 30px;
  color: #e4e6e7;
  font-style: 2.5rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#0c1c34;
font-size: 2.15rem;
width:35%;
font-weight:bold;
padding:1rem 1.5rem;
background: #cad5f5;
border-radius: 15px;
transition: 0.2s;
&:hover{
  background: #7bfaea;
  font-weight:bolder;
  letter-spacing:1.85px;
  text-decoration:underline;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;

`
export const Tag = styled.li`
color: #0c1c34;
font-size: 1.65rem;
padding:3px;
font-weight:bold;
background:#7bfaea;
width:50%;
border-radius:20px;
margin-left:5px;
`