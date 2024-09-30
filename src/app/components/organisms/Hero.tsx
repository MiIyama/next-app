import React from "react";
import Container from "@mui/material/Container";
import Title from "../molecules/Title";
import Subtitle from "../molecules/Subtitle";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </Container>
  );
};

export default Hero;
