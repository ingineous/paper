import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: rgba(190, 178, 170, 0.7);
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  padding: 0 0;
  flex: 1;
`;

export const DateContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 3px solid rgba(73, 51, 43, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bodoni Moda", serif;
  font-size: 20px;
  color: #000;
  width: 12%;

  span {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  position: sticky;
  width: 15%;
  top: 0;
  height: 100vh;
  border-left: 3px solid rgba(73, 51, 43, 0.6);
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display SC", serif;
  font-size: 70px;

  span {
    writing-mode: vertical-rl;
  }
`;
