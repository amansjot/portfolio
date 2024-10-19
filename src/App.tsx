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
            {/* replace href="resume102024.pdf" target="_self" */}
            Resume
            {/* <ExternalLinkIcon mt="-1" ml="2" /> */}
          </Link>
        </Flex>
      </HStack>

      {/* Home */}
      <Container id="top" p="10" pt="150" className="section">
        <Heading size="xl">Hi! I'm Aman.</Heading>
        <Center py="10">
          <img id="mainPhoto" src="headshot.jpg" alt="Me" />
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
          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader>
              <Heading fontSize="26px" mb="4">
                Freelance Computer Science Tutor
              </Heading>
              <Divider mb="5" w="100%" borderColor="#bbb" />
              <Heading fontSize="18px">
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
              <Text fontSize="12px" mt="2">
                JULY 2021 – PRESENT
              </Text>
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
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/EcnuiEo.png"
                          alt="apple icon"
                        ></Image>
                        &nbsp;
                        <Text>Teaching</Text>{" "}
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
                        Help with projects and homework (online and in-person)
                      </ListItem>
                      <ListItem>
                        Prepare frequent lessons for each student
                      </ListItem>
                      <ListItem>
                        Motivate students to achieve their educational goals
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader>
              <Heading fontSize="26px" mb="4">
                Data Engineering Intern
              </Heading>
              <Divider mb="5" w="100%" borderColor="#bbb" />
              <Heading fontSize="18px">
                <Center>
                  <Image
                    src="https://i.imgur.com/WBFbfq1.png"
                    w="5"
                    h="5"
                    alt="Chemours Logo"
                  ></Image>
                  &nbsp;
                  <Text>Chemours</Text>
                </Center>
              </Heading>
              <Text fontSize="12px" mt="2">
                MAY 2024 – AUGUST 2024
              </Text>
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
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/G5KAURb.png"
                          alt="SQL Server logo"
                        ></Image>
                        &nbsp;
                        <Text>SQL Server</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                          alt="Python logo"
                        ></Image>
                        &nbsp;
                        <Text>Python</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                          alt="CSS logo"
                        ></Image>
                        &nbsp;
                        <Text>CSS</Text>{" "}
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="20%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/EcnuiEo.png"
                          alt="apple icon"
                        ></Image>
                        &nbsp;
                        <Text>Teaching</Text>{" "}
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
                        Help with projects and homework (online and in-person)
                      </ListItem>
                      <ListItem>
                        Prepare frequent lessons for each student
                      </ListItem>
                      <ListItem>
                        Motivate students to achieve their educational goals
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader>
              <Heading fontSize="26px" mb="4">
                Undergraduate Researcher
              </Heading>
              <Divider mb="5" w="100%" borderColor="#bbb" />
              <Heading fontSize="18px">
                <Center>
                  <Image
                    src="https://i.imgur.com/VGbneYs.png"
                    w="5"
                    h="5"
                    alt="UD Logo"
                  ></Image>
                  &nbsp;
                  <Text>University of Delaware</Text>
                </Center>
              </Heading>
              <Text fontSize="12px" mt="2">
                JUNE 2023 – AUGUST 2023
              </Text>
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
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                          alt="Python logo"
                        ></Image>
                        &nbsp;
                        <Text>Python</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/840px-Globe_icon.svg.png"
                          alt="Research icon"
                        ></Image>
                        &nbsp;
                        <Text>Research</Text>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/TaKlMNM.png"
                          alt="Shell Scripting icon"
                        ></Image>
                        &nbsp;
                        <Text>Shell Scripting</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="2" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Completed a 10-week research program involving
                        programming
                      </ListItem>
                      <ListItem>
                        Verified a computationally complex mathematical proof in
                        Python
                      </ListItem>
                      <ListItem>
                        Developed the solution around specifications from a
                        professor
                      </ListItem>
                      <ListItem>
                        Showcased the results via a poster at a research
                        symposium
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="100" boxShadow="0 0 3px">
            <CardHeader>
              <Heading fontSize="26px" mb="4">
                C.S. Teaching Assistant
              </Heading>
              <Divider mb="5" w="100%" borderColor="#bbb" />
              <Heading fontSize="18px">
                <Center>
                  <Image
                    src="https://i.imgur.com/VGbneYs.png"
                    w="5"
                    h="5"
                    alt="UD Logo"
                  ></Image>
                  &nbsp;
                  <Text>University of Delaware</Text>
                </Center>
              </Heading>
              <Text fontSize="12px" mt="2">
                AUGUST 2022 – DECEMBER 2022
              </Text>
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
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                          alt="Python logo"
                        ></Image>
                        &nbsp;
                        <Text>Python</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="2" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Helped students with course assignments and projects
                      </ListItem>
                      <ListItem>
                        Developed instructional material for a Computer Science
                        course
                      </ListItem>
                      <ListItem>
                        Created and debugged projects for accelerated students
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Container>
      </Container>

      {/* Projects */}
      <Container p="10" pt="150" id="projects" className="section">
        <Heading size="xl" mb="10">
          My Projects
        </Heading>
        <Container fontSize="20px">
          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader mb="-8">
              <Heading fontSize="26px" mb="2">
                Portfolio
              </Heading>
              <Text fontSize="14px">by Aman Singh</Text>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center>
                        <Image
                          border="1px solid #aaa"
                          borderRadius="8px"
                          w="100%"
                          src="https://i.imgur.com/ia9olWY.png"
                          alt="Screenshot of Portfolio"
                        ></Image>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Link
                        href="https://github.com/amansjot/portfolio"
                        title="Portfolio - GitHub"
                        target="_blank"
                      >
                        View Code <ExternalLinkIcon mt="-1" />
                      </Link>
                      <Link
                        onClick={removeHash}
                        href="#top"
                        title="Portfolio Website"
                      >
                        Live Website <ExternalLinkIcon mt="-1" />
                      </Link>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Languages
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
                          alt="TypeScript logo"
                        ></Image>
                        &nbsp;
                        <Text>TypeScript</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                          alt="React logo"
                        ></Image>
                        &nbsp;
                        <Text>React</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/Wo1XhiY.jpg"
                          alt="Chakra UI logo"
                        ></Image>
                        &nbsp;
                        <Text>Chakra UI</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="6" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Showcases all of my work: experience, projects, and
                        skills
                      </ListItem>
                      <ListItem>
                        Created with Vite React-TS template (wrote all other
                        code)
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader mb="-8">
              <Heading fontSize="26px" mb="2">
                Sudoku Solver
              </Heading>
              <Text fontSize="14px">by Aman Singh</Text>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center>
                        <Image
                          border="1px solid #aaa"
                          borderRadius="8px"
                          w="100%"
                          src="https://i.imgur.com/vguplQF.png"
                          alt="Screenshot of Sudoku Solver"
                        ></Image>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Link
                        href="https://github.com/amansjot/sudoku-solver"
                        title="Sudoku Solver - GitHub"
                        target="_blank"
                      >
                        View Code <ExternalLinkIcon mt="-1" />
                      </Link>
                      <Link
                        href="https://sudoku-solver-ruby.vercel.app/"
                        title="Sudoku Solver Website"
                        target="_blank"
                      >
                        Live Website <ExternalLinkIcon mt="-1" />
                      </Link>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Languages
                  </Heading>
                  <Text pt="1" fontSize="sm">
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
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/41JfoQQ.png"
                          alt="AI icon"
                        ></Image>
                        &nbsp;
                        <Text>AI</Text>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="4" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Written as an Undergraduate Research for Summer Scholars
                      </ListItem>
                      <ListItem>
                        Several programs written to manipulate graphs and
                        matrices
                      </ListItem>
                      <ListItem>
                        Overall program verifies a computationally complex proof
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader mb="-8">
              <Heading fontSize="26px" mb="2">
                Blue Hen Bodega
              </Heading>
              <Text fontSize="14px">by Aman Singh</Text>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center>
                        <Image
                          border="1px solid #aaa"
                          borderRadius="8px"
                          w="100%"
                          src="https://i.imgur.com/liLJ6Nc.png"
                          alt="Screenshot of Blue Hen Bodega Live Website"
                        ></Image>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Link
                        href="https://github.com/amansjot/delivery-app-deloitte"
                        title="Blue Hen Bodega - GitHub"
                        target="_blank"
                      >
                        View Code <ExternalLinkIcon mt="-1" />
                      </Link>
                      <Link
                        href="https://amansjot.github.io/delivery-app-deloitte/"
                        title="Blue Hen Bodega Website"
                        target="_blank"
                      >
                        Live Website <ExternalLinkIcon mt="-1" />
                      </Link>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Languages
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
                          alt="TypeScript logo"
                        ></Image>
                        &nbsp;
                        <Text>TypeScript</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                          alt="React logo"
                        ></Image>
                        &nbsp;
                        <Text>React</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/Wo1XhiY.jpg"
                          alt="Chakra UI logo"
                        ></Image>
                        &nbsp;
                        <Text>Chakra UI</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="4" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Won 1st place in the 2024 Deloitte Case Competition at
                        UD
                      </ListItem>
                      <ListItem>
                        Built to demonstrate a solution to a local food supply
                        problem
                      </ListItem>
                      <ListItem>
                        Coded in 72 hours as a proof-of-concept for a delivery
                        website
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader mb="-8">
              <Heading fontSize="26px" mb="2">
                Spectral Seriation
              </Heading>
              <Text fontSize="14px">by Aman Singh</Text>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center>
                        <Image
                          border="1px solid #aaa"
                          borderRadius="8px"
                          w="100%"
                          src="https://i.imgur.com/wYo8c6L.png"
                          alt="Screenshot of Spectral Seriation Result"
                        ></Image>
                      </Center>
                    </Flex>
                    <Link
                      href="https://github.com/amansjot/spectral-seriation"
                      title="Spectral Seriation - GitHub"
                      target="_blank"
                    >
                      View Code <ExternalLinkIcon mt="-1" />
                    </Link>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Languages
                  </Heading>
                  <Text pt="1" fontSize="sm">
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
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/TaKlMNM.png"
                          alt="Shell Scripting icon"
                        ></Image>
                        &nbsp;
                        <Text>Shell Scripting</Text>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="35%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="4" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Written as an Undergraduate Research for Summer Scholars
                      </ListItem>
                      <ListItem>
                        Several programs written to manipulate graphs and
                        matrices
                      </ListItem>
                      <ListItem>
                        Overall program verifies a computationally complex proof
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader mb="-8">
              <Heading fontSize="26px" mb="2">
                Parking Panic
              </Heading>
              <Text fontSize="14px">by Aman Singh and 4 others</Text>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center>
                        <Image
                          border="1px solid #aaa"
                          borderRadius="8px"
                          w="100%"
                          src="https://i.imgur.com/58ZyNqK.png"
                          alt="Screenshot of Parking Panic"
                        ></Image>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Link
                        href="https://github.com/amansjot/parking-panic"
                        title="Parking Panic GitHub"
                        target="_blank"
                      >
                        View Code <ExternalLinkIcon mt="-1" />
                      </Link>
                      <Link
                        href="https://amansjot.github.io/parking-panic/"
                        title="Parking Panic Website"
                        target="_blank"
                      >
                        Live Website <ExternalLinkIcon mt="-1" />
                      </Link>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
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
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="6" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Developed a driving game with static web technologies
                      </ListItem>
                      <ListItem>
                        Fully-functional game with multiple modes and challenges
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="7" boxShadow="0 0 3px">
            <CardHeader mb="-8">
              <Heading fontSize="26px" mb="2">
                HAKSafety
              </Heading>
              <Text fontSize="14px">by Aman Singh and 3 others</Text>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center>
                        <Image
                          border="1px solid #aaa"
                          borderRadius="8px"
                          w="100%"
                          src="https://i.imgur.com/xFzRbGz.png"
                          alt="Screenshot of HAKSafety Live Website"
                        ></Image>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Link
                        href="https://github.com/amansjot/HAKSafety"
                        title="HAKSafety - GitHub"
                        target="_blank"
                      >
                        View Code <ExternalLinkIcon mt="-1" />
                      </Link>
                      <Link
                        href="https://amansjot.github.io/HAKSafety/"
                        title="HAKSafety Website"
                        target="_blank"
                      >
                        Live Website <ExternalLinkIcon mt="-1" />
                      </Link>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Languages
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
                          alt="TypeScript logo"
                        ></Image>
                        &nbsp;
                        <Text>TypeScript</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                          alt="React logo"
                        ></Image>
                        &nbsp;
                        <Text>React</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/Wo1XhiY.jpg"
                          alt="Chakra UI logo"
                        ></Image>
                        &nbsp;
                        <Text>Chakra UI</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="4" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Placed 1st in HenHacks 2023 - Best M&T Community Hack
                      </ListItem>
                      <ListItem>
                        Formulated a solution to local safety with a virtual
                        blue button
                      </ListItem>
                      <ListItem>
                        Made to give real-time event alerts and easy-access
                        hotlines
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card mb="100" boxShadow="0 0 3px">
            <CardHeader mb="-8">
              <Heading fontSize="26px" mb="2">
                MoviePedia
              </Heading>
              <Text fontSize="14px">by Aman Singh and 4 others</Text>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center>
                        <Image
                          border="1px solid #aaa"
                          borderRadius="8px"
                          w="100%"
                          src="https://i.imgur.com/7XUjaaA.png"
                          alt="Screenshot of MoviePedia Live Website"
                        ></Image>
                      </Center>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                      <Link
                        href="https://github.com/amansjot/Team5-MoviePedia"
                        title="MoviePedia - GitHub"
                        target="_blank"
                      >
                        View Code <ExternalLinkIcon mt="-1" />
                      </Link>
                      <Link
                        href="https://amansjot.github.io/Team5-MoviePedia/"
                        title="MoviePedia Website"
                        target="_blank"
                      >
                        Live Website <ExternalLinkIcon mt="-1" />
                      </Link>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Languages
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
                          alt="TypeScript logo"
                        ></Image>
                        &nbsp;
                        <Text>TypeScript</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                          alt="React logo"
                        ></Image>
                        &nbsp;
                        <Text>React</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/Wo1XhiY.jpg"
                          alt="Chakra UI logo"
                        ></Image>
                        &nbsp;
                        <Text>Chakra UI</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Skills
                  </Heading>
                  <Text pt="1" fontSize="sm">
                    <Flex justifyContent="space-evenly" p="2">
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/4Qoczb0.png"
                          alt="VSCode logo"
                        ></Image>
                        &nbsp;
                        <Text>VSCode</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/sXdpGX7.png"
                          alt="Git logo"
                        ></Image>
                        &nbsp;
                        <Text>Git</Text>
                      </Center>
                      <Center w="25%">
                        <Image
                          w="7"
                          src="https://i.imgur.com/5FK6NrD.png"
                          alt="GitHub logo"
                        ></Image>
                        &nbsp;
                        <Text>GitHub</Text>
                      </Center>
                    </Flex>
                  </Text>
                </Box>
                <Divider mx="5" w="100%" borderColor="#bbb" />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" mx="4" fontSize="sm">
                    <UnorderedList>
                      <ListItem>
                        Final collaborative project for Software Engineering
                        course
                      </ListItem>
                      <ListItem>
                        Users can edit names, lists, and movies from a movie
                        database
                      </ListItem>
                      <ListItem>
                        Implements several roles with saved state using local
                        storage
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Container>
      </Container>

      {/* Skills */}
      <Container p="10" pt="150" id="skills" className="section">
        <Heading size="xl" mb="10">
          My Skills
        </Heading>
        <Container fontSize="18px">
          <Text mb="10">
            A sample of technical skills I've gained over the years
          </Text>
          <Container>
            <Grid
              templateColumns="repeat(3, 1fr)"
              rowGap={12}
              columnGap={6}
              fontSize="16px"
            >
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/sXdpGX7.png"
                  alt=""
                ></Image>
                <Text mt="2">Git</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/5FK6NrD.png"
                  alt=""
                ></Image>
                <Text mt="2">GitHub</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/N5ZA26r.png"
                  alt=""
                ></Image>
                <Text mt="2">MySQL</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/pkYAN9p.png"
                  alt=""
                ></Image>
                <Text mt="2">phpMyAdmin</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/4Qoczb0.png"
                  alt=""
                ></Image>
                <Text mt="2">VSCode</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/TaKlMNM.png"
                  alt=""
                ></Image>
                <Text mt="2">Shell Scripting</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/1xoCEhY.png"
                  alt=""
                ></Image>
                <Text mt="2">MS Office</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/BoeQqyk.png"
                  alt=""
                ></Image>
                <Text mt="2">IntelliJ</Text>
              </Container>
              <Container>
                <Image
                  height="50px"
                  margin="0 auto"
                  src="https://i.imgur.com/zmEi36J.png"
                  alt=""
                ></Image>
                <Text mt="2">Mathematica</Text>
              </Container>
            </Grid>
          </Container>
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
            href="resume102024.pdf"
            _hover={{ textDecoration: "none" }}
            target="_blank"
            mr="3"
            id="resumeLink2"
          >
            Open PDF
            <ExternalLinkIcon mt="-1" ml="2" />
          </Link>
          <Center mt="8">
            <Image
              src="resume102024.png"
              alt="Resume"
              border="1px solid black"
            />
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
