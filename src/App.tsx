import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HStack,
  Heading,
  Stack,
  Flex,
  Link,
  Container,
  Icon,
  IconButton,
  Center,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <HStack
        as={"nav"}
        p={6}
        bg="black"
        color="white"
        borderBottom="2px solid black"
        justify="space-between"
      >
        <HStack>
          {/* <img src={logo} width="50" alt="Clapboard Logo" /> */}
          <Heading size="lg" pl={2}>
            Aman Singh
          </Heading>
        </HStack>
        <Flex className="navLinks" justifyContent="space-between" w="40%">
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#stack">Stack</Link>
          <Link href="/resume2023.pdf" target="_blank" mr="3" color="#91fff2">
            Resume
            <ExternalLinkIcon mt="-1" ml="2" />
          </Link>
        </Flex>
      </HStack>

      {/* Home */}
      <Container p="10">
        <Heading size="xl">Hi! I'm Aman.</Heading>
        <Center py="10">
          <img id="mainPhoto" src="https://i.imgur.com/x97qmFj.png" alt="Me"/>
        </Center>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to build programs and websites.
          <br/><br/>
          Feel free to explore this site to find out more about my coding experience, projects, and other interests.
        </Container>
      </Container>

      {/* About */}
      <Container p="10" mt="100" id="about">
        <Heading size="xl">Hi! I'm Aman.</Heading>
        <Center py="10">
          <img id="mainPhoto" src="https://i.imgur.com/x97qmFj.png" alt="Me"/>
        </Center>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to create websites and programs.
          <br/><br/>
          Feel free to explore this site to find out more about my coding experience, projects, and other interests.
        </Container>
      </Container>

      {/* Experience */}
      <Container p="10" mt="100" id="experience">
        <Heading size="xl">Hi! I'm Aman.</Heading>
        <Center py="10">
          <img id="mainPhoto" src="https://i.imgur.com/x97qmFj.png" alt="Me"/>
        </Center>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to create websites and programs.
          <br/><br/>
          Feel free to explore this site to find out more about my coding experience, projects, and other interests.
        </Container>
      </Container>

      {/* social links */}
      <HStack
        position="fixed"
        bottom="25px"
        left="25px"
      >
        <Center mr="1">
          <IconButton
            onClick={() => window.open("https://github.com/amansjot")}
            className="iconButton"
            id="githubIcon"
            aria-label="GitHub"
            bg="white"
            border="3px solid #171515"
            color="#171515"
            height="60px"
            width="60px"
            borderRadius="10px"
            icon={<FontAwesomeIcon fontSize="36px" icon={faGithub} />}
          />
        </Center>
        <Center>
          <IconButton
            onClick={() => window.open("https://www.linkedin.com/in/amns/")}
            className="iconButton"
            id="linkedinIcon"
            aria-label="LinkedIn"
            bg="white"
            color="#0077B5"
            border="3px solid #0077B5"
            height="60px"
            width="60px"
            borderRadius="10px"
            icon={<FontAwesomeIcon fontSize="32px" icon={faLinkedinIn} />}
          />
        </Center>
      </HStack>
    </div>
  );
}

export default App;
