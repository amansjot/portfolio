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
  Image
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function App() {
  function removeHash() {
    setTimeout(function () {
      window.history.replaceState({}, document.title, ".");
    }, 10);
  }

  return (
    <div className="App">
      {/* navbar */}
      <HStack
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
        zIndex="999"
      >
        <HStack>
          {/* <img src={logo} width="50" alt="Clapboard Logo" /> */}
          <Heading size="lg" pl={2}>
            <Link onClick={removeHash} href="#top" id="topName">
              # Aman Singh
            </Link>
          </Heading>
        </HStack>
        <Flex className="navLinks" justifyContent="space-between" w="30%">
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          {/* <Link href="#more">More</Link> */}
          <Link href="#resume" target="_self" mr="3" id="resumeLink">
            {/* replace href="resume2023.pdf" target="_self" */}
            Resume
            {/* <ExternalLinkIcon mt="-1" ml="2" /> */}
          </Link>
        </Flex>
      </HStack>

      {/* Home */}
      <Container id="top" p="10" pt="150" className="section">
        <Heading size="xl">Hi! I'm Aman.</Heading>
        <Center py="10">
          <img id="mainPhoto" src="https://i.imgur.com/x97qmFj.png" alt="Me" />
        </Center>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to
          build programs and websites.
          <br />
          <br />
          Feel free to explore this site to find out more about my experience,
          projects, and other interests.
        </Container>
        <Center mt="50">
          <FontAwesomeIcon
            onClick={() => window.open("#experience", "_self")}
            fontSize="24px"
            className="fa-bounce"
            icon={faChevronDown}
          />
        </Center>
      </Container>

      {/* Experience */}
      <Container p="10" pt="150" id="experience" className="section">
        <Heading size="xl" mb="10">
          My Experience
        </Heading>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to
          create websites and programs.
          <br />
          <br />
          Feel free to explore this site to find out more about my experience,
          projects, and other interests.
        </Container>
      </Container>

      {/* Projects */}
      <Container p="10" pt="150" id="projects" className="section">
        <Heading size="xl" mb="10">
          My Projects
        </Heading>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to
          create websites and programs.
          <br />
          <br />
          Feel free to explore this site to find out more about my experience,
          projects, and other interests.
        </Container>
      </Container>

      {/* Skills */}
      <Container p="10" pt="150" id="skills" className="section">
        <Heading size="xl" mb="10">
          My Skills
        </Heading>
        <Container fontSize="20px">
          I'm a 19-year old student at the University of Delaware, and I love to
          create websites and programs.
          <br />
          <br />
          Feel free to explore this site to find out more about my experience,
          projects, and other interests.
        </Container>
      </Container>

      {/* Resume */}
      <Container p="10" pt="150" pb="150" id="resume" className="section" borderBottom="none">
        <Heading size="xl" mb="10">
          My Resume
        </Heading>
        <br/>
        <Container>
          <Link href="resume2023.pdf" _hover={{"textDecoration": "none"}} target="_blank" mr="3" id="resumeLink2">
            Open PDF
            <ExternalLinkIcon mt="-1" ml="2" />
          </Link>
          <Center mt="8">
            <Image src="resume2023.png" alt="Resume" border="1px solid black"/>
          </Center>
        </Container>
      </Container>

      {/* Social Links */}
      <HStack position="fixed" bottom="35px" left="35px">
        <Center>
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
            mr="3"
            _hover={{"color": "white", "backgroundColor": "#171515"}}
            icon={<FontAwesomeIcon fontSize="36px" icon={faGithub} />}
          />
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
            mr="3"
            _hover={{"color": "white", "backgroundColor": "#0077B5"}}
            icon={<FontAwesomeIcon fontSize="32px" icon={faLinkedinIn} />}
          />
          <IconButton
            onClick={() => window.open("mailto:amansjot@gmail.com")}
            className="iconButton"
            aria-label="LinkedIn"
            bg="white"
            color="#BB001B"
            border="3px solid #BB001B"
            height="60px"
            width="60px"
            borderRadius="10px"
            _hover={{"color": "white", "backgroundColor": "#BB001B"}}
            icon={<FontAwesomeIcon fontSize="32px" icon={faEnvelope} />}
          />
        </Center>
      </HStack>
    </div>
  );
}

export default App;
