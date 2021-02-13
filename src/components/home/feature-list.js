/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { AnimateKeyframes } from "react-simple-animate";
import { EmoIcon, GatsbyIcon, ReactIcon, TextIcon } from "../../assets/icons";
import { Feature } from "./feature";

const FEATURES = [
  {
    title: "React",
    icon: ReactIcon,
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
  },
  {
    title: "Gatsby",
    icon: GatsbyIcon,
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
  },
  {
    title: "Emotion",
    icon: EmoIcon,
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
  },
  {
    title: "Mdx",
    icon: TextIcon,
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${(p) => p.theme.space[4]};
  grid-row-gap: ${(p) => p.theme.space[4]};
`;

const animationSettings = {
  play: true,
  delay: 0.5,
  duration: 0.5,
  iterationCount: 4,
  keyframes: [
    { 0: "transform: translateX(0%)" },
    { 15: "transform: scale(0.91)" },
    { 30: "transform: translateX(-30px) rotate(6deg)" },
    { 45: "transform: translateX(15px) rotate(-6deg)" },
    { 60: "transform: translateX(-15px) rotate(3.6deg)" },
    { 75: "transform: translateX(9px) rotate(-2.4deg)" },
    { 100: "transform: translateX(-6px) rotate(1.2deg)" },
  ],
};

export const FeatureList = ({ className }) => (
  <Container className={className}>
    {FEATURES.map(({ description, ...feature }, index) => (
      <AnimateKeyframes {...animationSettings} key={index}>
        <Feature {...feature}>{description}</Feature>
      </AnimateKeyframes>
    ))}
  </Container>
);
