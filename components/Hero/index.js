import { useEffect, useRef, useState } from "react";
import { Container, Heading, BigHeading, Desc, Resume } from "./styles";

export default function Hero() {
  return (
    <Container>
      <Heading>Hi, my name is</Heading>
      <BigHeading>Brijesh Makwana</BigHeading>
      <BigHeading opacity={0.7} fontSize={"3vw"}>
        I build exceptional digital experiences.
      </BigHeading>
      <Desc>
        {
          "I’m a software engineer specializing in building mobile apps and learning new tech every day. Currently, I’m focused on building e-commerce products at "
        }
        <span>Alshaya Group</span>.
      </Desc>
      <Resume>Resume</Resume>
    </Container>
  );
}
