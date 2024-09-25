import React from "react";
import {
  About,
  AboutContainer,
  Container,
  FirstName,
  I,
  Line,
  NameContainer,
  ScrollWrapper,
  SecondaryAboutContainer,
  SecondName,
  SecondNameContainer,
  StyledCatto,
} from "./Introduction.style";
import stampPic from "../../public/stamp.png";
import Image from "next/image";

function Introduction({
  last,
  imgSrc,
  first,
  second,
  alt,
  children,
  stamp,
  capText,
}) {
  return (
    <ScrollWrapper>
      <Container>
        <NameContainer>
          <FirstName>{first}</FirstName>
          <SecondNameContainer>
            <SecondName>{second}</SecondName>
            {stamp && (
              <Image
                src={stampPic}
                alt={"stamp"}
                height={100}
                width={70}
                className={"stampImg"}
                objectFit={"contain"}
              />
            )}
          </SecondNameContainer>
        </NameContainer>

        <AboutContainer>
          <SecondaryAboutContainer>
            <I>{capText}</I>
            <About>{children}</About>
          </SecondaryAboutContainer>
          <StyledCatto src={imgSrc} alt={alt} height={200} />
        </AboutContainer>
      </Container>
      {!last && <Line />}
    </ScrollWrapper>
  );
}

export default Introduction;
