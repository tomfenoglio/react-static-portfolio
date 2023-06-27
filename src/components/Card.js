import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (

      <VStack spacing={4} align="left" background="white" borderRadius={8} pb={4}>
        <Image src={imageSrc} borderRadius={8}/>
        <Heading as="h2" size="md" color="black" pl={4}>{title} </Heading>
        <Text fontSize="md" color="grey" pl={4}>{description}</Text>
        <HStack spacing='7px' pl={4}>
          <Text fontSize="md" color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </VStack> 
  ); 
};

export default Card;
