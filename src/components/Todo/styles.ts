import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.theme.bgImgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
