import React, { useEffect, useState } from "react";
import {
  Container,
  ContentContainer,
  DateContainer,
  TitleContainer,
} from "./Home.style";
import { format } from "date-fns";
import Introduction from "../Introduction";
import Anchor from "../Anchor";

function Home() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(format(new Date(), "PPP"));
  }, []);

  return (
    <Container>
      <DateContainer>
        <span>{currentDate}</span>
      </DateContainer>
      <ContentContainer>
        <Introduction
          first={"Tyler"}
          second={"Tony"}
          alt={"profile"}
          imgSrc={"/catto.jpg"}
          capText={"I"}
          stamp
        >
          am a self-taught developer and UI/UX designer. Based in NYC.
        </Introduction>
        <Introduction
          first={"Some"}
          second={"Work"}
          imgSrc={"/project.jpg"}
          capText={"I"}
          alt={"laptop"}
        >
          take joy in my work. <br />
          Projects:{" "}
          <Anchor text={"AI Creepers"} src={"https://ai-creepers.vercel.app"} />
          ,{" "}
          <Anchor
            text={"Netflix clone"}
            src={"https://netflix-clone-rose.vercel.app/"}
          />
          ,{" "}
        </Introduction>
        <Introduction first={"Wanna"} second={"meet"} imgSrc={"/contactbw.png"} alt={"contact"} last >
          email: foobar@example.com
          <br/>
          <Anchor text={"Github"} src={"https://github.com"} />, {" "}
          <Anchor text={"Instagram"} src={"https://instagram.com"} /> {" "}
        </Introduction>
      </ContentContainer>
      <TitleContainer>
        <span>Developer</span>
      </TitleContainer>
    </Container>
  );
}

export default Home;
