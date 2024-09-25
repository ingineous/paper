import styled from "styled-components";

export const ScrollWrapper = styled.div`
  scroll-snap-align: start;
  height: 100vh;
`;

export const Container = styled.div`
  padding: 100px 50px;
  display: flex;
  flex-direction: ${(props) => (props?.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
`;

export const FirstName = styled.h1`
  margin: 0;
  font-family: "Noto Serif Display", serif;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 10px;
  font-size: 120px;
`;

export const SecondNameContainer = styled.div`
  display: flex;
  align-items: center;

  .stampImg {
    top: 15px !important;
  }
`;

export const SecondName = styled.h1`
  margin: 0;
  margin-right: 10px;
  font-family: "Noto Serif Display", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  letter-spacing: 10px;
`;

export const NameContainer = styled.div``;

export const AboutContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding-left: 40px;
  padding-top: 320px;
`;

export const I = styled.h2`
  font-family: "Noto Serif Display", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  margin: 0;
  color: #000000;
`;

export const About = styled.p`
  margin: 0;
  position: relative;
  top: 10px;
  margin-left: 10px;
  font-family: "Bodoni Moda", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;

  color: #000000;
`;

export const SecondaryAboutContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledCatto = styled.img`
  margin-top: -300px;
  margin-bottom: 50px;
  height: 300px;
  object-fit: cover;
`;

export const Line = styled.hr`
  border-color: rgba(73, 51, 43, 0.6);
`;
