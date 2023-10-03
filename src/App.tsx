import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  HStack,
  Heading,
  Flex,
  Text,
  Link,
  Container,
  IconButton,
  Center,
  Image,
  StackDivider,
  VStack,
  Card,
  CardBody,
  Box,
  CardHeader,
  Stack,
  Divider,
  UnorderedList,
  ListItem,
  Grid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function App() {
  function getAge() {
    var date = new Date(2003, 6, 1);
    var now = new Date();
    var year = now.getFullYear();
    var year_diff = year - date.getFullYear();
    var birthday_this_year = new Date(year, date.getMonth(), date.getDate());
    var has_had_birthday_this_year = now >= birthday_this_year;

    return has_had_birthday_this_year ? year_diff : year_diff - 1;
  }

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
        <Flex className="navLinks" justifyContent="space-between" w="38%">
          <Link href="#about">About Me</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
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
          I'm a {getAge()}-year-old student at the University of Delaware, and I
          love to build programs and websites.
          <br />
          <br />
          Feel free to explore this site to find out more about my experience,
          projects, and other interests.
        </Container>
        <Center mt="50">
          <FontAwesomeIcon
            onClick={() => window.open("#about", "_self")}
            fontSize="24px"
            className="fa-bounce"
            icon={faChevronDown}
          />
        </Center>
      </Container>

      {/* About Me */}
      <Container
        p="10"
        pt="150"
        id="about"
        className="section"
        minWidth="800px"
        pb="150px"
      >
        <Heading size="xl" mb="10">
          Who am I?
        </Heading>
        <Container fontSize="16px">
          <VStack
            divider={<StackDivider borderColor="black" />}
            spacing={10}
            align="stretch"
          >
            <HStack textAlign="left">
              <div>
                <Heading fontSize="26px" mb="2">
                  I'm a{" "}
                  <Text as="span" color="red.500">
                    learner
                  </Text>
                  .
                </Heading>
                <p>
                  I currently attend the University of Delaware as a third-year
                  student majoring in Computer Science B.S. (2021 - present).
                </p>
              </div>
              <Image
                alt="UD logo"
                h="120px"
                boxShadow="0 0 4px"
                src="https://i.imgur.com/4Ekoxl6.png"
              />
            </HStack>
            <HStack textAlign="right">
              <Image
                alt="Wyzant logo"
                h="120px"
                boxShadow="0 0 4px"
                src="https://i.imgur.com/eatPtCx.png"
              />
              <div>
                <Heading fontSize="26px" mb="2">
                  I'm a{" "}
                  <Text as="span" color="green.500">
                    teacher
                  </Text>
                  .
                </Heading>
                <p>
                  As a <b>certified tutor</b> on Wyzant, I hold in-person and
                  online Computer Science lessons for students of all ages and
                  knowledge levels (2021 - present).
                </p>
              </div>
            </HStack>
            <HStack textAlign="left">
              <div>
                <Heading fontSize="26px" mb="2">
                  I'm a{" "}
                  <Text as="span" color="yellow.500">
                    leader
                  </Text>
                  .
                </Heading>
                <p>
                  I am an active participant and <b>Project Coordinator</b> of
                  the CS + Social Good chapter at my university (2023 -
                  present).
                </p>
              </div>
              <Image
                alt="Cs+SG logo"
                h="120px"
                boxShadow="0 0 4px"
                src="https://avatars.githubusercontent.com/u/47543665?s=200&v=4"
              />
            </HStack>
            <HStack textAlign="right">
              <Image
                alt="HenHacks"
                h="120px"
                boxShadow="0 0 4px"
                src="https://i.imgur.com/Bjiik1k.png"
              />
              <div>
                <Heading fontSize="26px" mb="2">
                  I'm a{" "}
                  <Text as="span" color="purple.500">
                    problem-solver
                  </Text>
                  .
                </Heading>
                <p>
                  I enjoy competing in hackathons, and I recently earned{" "}
                  <b>1st place</b> in the M&T-sponspored Best Community Hack for
                  the HenHacks 2023 Hackathon at the University of Delaware.
                </p>
              </div>
            </HStack>
            <HStack textAlign="left">
              <div>
                <Heading fontSize="26px" mb="2">
                  I'm a{" "}
                  <Text as="span" color="blue.500">
                    creator
                  </Text>
                  .
                </Heading>
                <p>
                  I have created multiple websites and programs (detailed&nbsp;
                  <Link color="blue" href="#projects" rel="noreferrer">
                    below
                  </Link>
                  ). Additionally, I enjoy creating origami models in my free
                  time. One such creation is shown, and my entire origami
                  collection can be found{" "}
                  <Link
                    color="blue"
                    href="//flic.kr/s/aHBqjAHFSA"
                    rel="noreferrer"
                    target="_blank"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
              <Image
                alt="origami creation"
                h="120px"
                boxShadow="0 0 4px"
                src="https://live.staticflickr.com/65535/52973061053_d2dfe13e60_b.jpg"
              />
            </HStack>
            <HStack textAlign="right">
              <Image
                alt="HenHacks"
                h="150px"
                src="https://cdn0.iconfinder.com/data/icons/infographic-orchid-vol-1/256/Grid_Matrix-512.png"
              />
              <div>
                <Heading fontSize="26px" mb="2">
                  I'm a{" "}
                  <Text as="span" color="orange.500">
                    researcher
                  </Text>
                  .
                </Heading>
                <p>
                  I am currently working as a undergraduate researcher in the
                  Summer Scholars/GEMS program for summer research at the
                  University of Delaware.
                </p>
              </div>
            </HStack>
          </VStack>
        </Container>
      </Container>

      {/* Experience */}
      <Container p="10" pt="150" id="experience" className="section">
        <Heading size="xl" mb="10">
          My Experience
        </Heading>
        <Container>
          <Card>
            <CardHeader>
              <Heading fontSize="26px" mb="4">
                Certified Computer Science Tutor
              </Heading>
              <Heading fontSize="20px">
                <Center>
                  <Image
                    src="https://i.imgur.com/eatPtCx.png"
                    w="5"
                    h="5"
                    alt="Wyzant Logo"
                  ></Image>
                  &nbsp;
                  <Text>Wyzant Tutoring</Text>
                </Center>
              </Heading>
              <Text fontSize="12px" mt="2">JULY 2021 – PRESENT</Text>
            </CardHeader>
            <Divider mx="5" w="90%" borderColor="#bbb" />
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Languages
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
                          alt="HTML logo"
                        ></Image>
                        &nbsp;
                        <Text>HTML</Text>
                      </Center>
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                          alt="CSS logo"
                        ></Image>
                        &nbsp;
                        <Text>CSS</Text>{" "}
                      </Center>
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"
                          alt="JS logo"
                        ></Image>
                        &nbsp;
                        <Text>JavaScript</Text>{" "}
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                          alt="Python logo"
                        ></Image>
                        &nbsp;
                        <Text>Python</Text>
                      </Center>
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                          alt="PHP logo"
                        ></Image>
                        &nbsp;
                        <Text>PHP</Text>{" "}
                      </Center>
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                          alt="Java logo"
                        ></Image>
                        &nbsp;
                        <Text>Java</Text>{" "}
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="7" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Teach students about Computer Science topics
                      </ListItem>
                      <ListItem>
                        Help with projects and homework
                        (online and in-person)
                      </ListItem>
                      <ListItem>
                        Prepare frequent lessons for each student
                      </ListItem>
                      <ListItem>
                        Motivate students to
                        achieve their educational goals
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Container mt="5">
          The rest of my experience is in my Resume at the bottom.
          </Container>
        </Container>
      </Container>

      {/* Projects */}
      <Container p="10" pt="150" id="projects" className="section">
        <Heading size="xl" mb="10">
          My Projects
        </Heading>
        <Container fontSize="20px">
          View my Projects in my Resume at the bottom.
        </Container>
      </Container>

      {/* Skills */}
      <Container p="10" pt="150" id="skills" className="section">
        <Heading size="xl" mb="10">
          My Skills
        </Heading>
        <Container fontSize="20px">
          View my Skills in my Resume at the bottom.
        </Container>
      </Container>

      {/* Resume */}
      <Container
        p="10"
        pt="150"
        pb="150"
        id="resume"
        className="section"
        borderBottom="none"
      >
        <Heading size="xl" mb="10">
          My Resume
        </Heading>
        <br />
        <Container>
          <Link
            href="resume2023.pdf"
            _hover={{ textDecoration: "none" }}
            target="_blank"
            mr="3"
            id="resumeLink2"
          >
            Open PDF
            <ExternalLinkIcon mt="-1" ml="2" />
          </Link>
          <Center mt="8">
            <Image src="resume2023.png" alt="Resume" border="1px solid black" />
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
            borderColor="#171515"
            color="#171515"
            height="60px"
            borderRadius="10px"
            mr="3"
            _hover={{ color: "white", backgroundColor: "#171515" }}
            icon={<FontAwesomeIcon fontSize="36px" icon={faGithub} />}
          />
          <IconButton
            onClick={() => window.open("https://www.linkedin.com/in/amns/")}
            className="iconButton"
            id="linkedinIcon"
            aria-label="LinkedIn"
            bg="white"
            color="#0077B5"
            borderColor="#0077B5"
            height="60px"
            borderRadius="10px"
            mr="3"
            _hover={{ color: "white", backgroundColor: "#0077B5" }}
            icon={<FontAwesomeIcon fontSize="32px" icon={faLinkedinIn} />}
          />
          <IconButton
            onClick={() => window.open("mailto:amansjot@gmail.com")}
            className="iconButton"
            aria-label="email"
            bg="white"
            color="#BB001B"
            borderColor="#BB001B"
            height="60px"
            borderRadius="10px"
            _hover={{ color: "white", backgroundColor: "#BB001B" }}
            icon={<FontAwesomeIcon fontSize="32px" icon={faEnvelope} />}
          />
        </Center>
      </HStack>
    </div>
  );
}

export default App;
