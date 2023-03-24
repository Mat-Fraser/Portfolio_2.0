import styled from 'styled-components'

export const Img = styled.img`
  width:90%;
  height:90%;
  margin-top:1rem;
  object-fit: cover;
  overflow: hidden;
  border-radius:25px;
  border-right:2px solid #7bfaea;
  border-bottom:1.85px solid #7bfaea;
  padding:1rem;
  &:hover{
    transition:0.1s;
    border-right:2px solid #7bfaea;
    border-bottom:1.85px solid #7bfaea;
    border-left:2px solid #7bfaea;
    border-top:1.85px solid #7bfaea;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  width:100%;
  height:80%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  width:80%;
  height:80%;
`;