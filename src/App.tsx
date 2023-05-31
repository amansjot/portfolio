import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  HStack,
  Heading,
  Flex,
  Link,
  Container,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <HStack
        id="top"
        as={"nav"}
        p={6}
        position="fixed"
        top="0"
        w="95%"
        mx="2.5%"
        bg="#b4e7e4"
        color="black"
        borderBottom="2px solid black"
        justify="space-between"
        boxShadow="0 4px 4px -4px #555"
      >
        <HStack>
          {/* <img src={logo} width="50" alt="Clapboard Logo" /> */}
          <Heading size="lg" pl={2}>
            <Link href="#top" id="topName">Aman Singh</Link>
          </Heading>
        </HStack>
        <Flex className="navLinks" justifyContent="space-between" w="40%">
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#stack">Stack</Link>
          <Link href="/resume2023.pdf" target="_blank" mr="3" id="resumeLink">
            Resume
            <ExternalLinkIcon mt="-1" ml="2" />
          </Link>
        </Flex>
      </HStack>

      {/* Home */}
      <Container p="10" pt="150">
        <Heading size="xl">Hi! I'm Aman.</Heading>
        <Center py="10">
          <img id="mainPhoto" src="https://i.imgur.com/x97qmFj.png" alt="Me"/>
        </Center>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to build programs and websites.
          <br/><br/>
          Feel free to explore this site to find out more about my experience, projects, and other interests.
        </Container>
      </Container>

      {/* About */}
      <Container p="10" pt="150" id="about">
        <Heading size="xl" mb="10">About Me</Heading>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to create websites and programs.
          <br/><br/>
          Feel free to explore this site to find out more about my experience, projects, and other interests.
        </Container>
      </Container>

      {/* Experience */}
      <Container p="10" pt="150" id="experience">
        <Heading size="xl" mb="10">My Experience</Heading>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to create websites and programs.
          <br/><br/>
          Feel free to explore this site to find out more about my experience, projects, and other interests.
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
