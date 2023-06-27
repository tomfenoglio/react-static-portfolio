import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tom!";
const bio1 = "A full-stack web developer,";
const bio2 = "in continuous learning process.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   
    <Avatar name="Pete" src="/images/tom-profile-pic2.png" size="2xl"/>
    <Heading as="h1" size="lg">
      {greeting}
    </Heading>
    <Heading as="h1" size="xl">
      {bio1}
    </Heading>
    <Heading as="h1" size="xl">
      {bio2}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
