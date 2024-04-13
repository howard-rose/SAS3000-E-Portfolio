'use client';

//import Image from "next/image";
import { Image } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { saveAs } from 'file-saver'; 
import { Center, Square, Circle } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Stack spacing='50px'>
        <Center width='1500px'>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            maxW='1000'
            marginTop='50px'
          >
            <Image
                src="/profile_pic_square.jpg"
                alt="Profile Picture"
                boxSize='400px'
                objectFit='cover'
            />
            <Stack>
              <CardHeader>
                <Heading>Hello, I&apos;m Philip Santiago!</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize='20px'>
                  Welcome to my E-Portfolio! I&apos;m Philip, a 3rd year student currently taking Bachelor of Science and Master of Science in Computer Science at De La Salle University - Manila.
                  Programming and problem solving are some of my passions, and I&apos;m aspiring to become a software developer/engineer in the future.
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={downloadResume}>Download my Resume!</Button>
              </CardFooter>
            </Stack>
          </Card>
        </Center>
        <Center width='1500px'>
          <Tabs isFitted variant='enclosed' minW='1250' maxW='1250'>
            <TabList>
              <Tab>Abilities & Traits</Tab>
              <Tab>Skills & Strengths</Tab>
              <Tab>Self-reflection</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text>
                  I am often calm and composed, even in the face of stress. 

                  I can be described as a sensitive and empathetic person.

                  One of my weaknesses is my capability to be a leader; I am content with following the lead of someone else,
                  but I know that sometimes I have to take the initiative too.

                  I am not an assertive person.

                  I have a strong set of standards and beliefs that I hold myself to: I will always try to do what I think is right.

                  Generally, I try to stay within my comfort zone, but I&apos;d like to try being more open-minded and try out new things more often.
                </Text>
              </TabPanel>
              <TabPanel>
                <Text>
                  I am familiar with the following frameworks and languages:
                  <UnorderedList>
                    <ListItem>Node.js, React, Next.js</ListItem>
                    <ListItem>Express, Handlebars.js</ListItem>
                    <ListItem>HTML, CSS, JavaScript</ListItem>
                    <ListItem>MySQL, Prisma, MongoDB, Mongoose</ListItem>
                    <ListItem>Java, JavaFX, JSP, JUnit</ListItem>
                    <ListItem>Python</ListItem>
                    <ListItem>C, C++</ListItem>
                    <ListItem>x86-64</ListItem>
                  </UnorderedList>
                </Text>
                <br/>
                <Text>
                  To see my projects, check out my <Link href='https://github.com/howard-rose' color='teal.500'>GitHub</Link>!
                </Text>
              </TabPanel>
              <TabPanel>
                <Text as='b'>
                  (Masid-Danas) How was my experience going through SAS3000 and what were my observations and self-discoveries?
                </Text>
                <Text>
                  Overall, I can say that my experience going through SAS3000 was eye-opening. Going in, I felt wholly unprepared for entering a career, and it was worrying since our practicum would be coming up soon. However, bit by bit, I was able to see and equip myself with the tools I needed to take my first steps in entering the career world. I realized that maybe, career hunting isn&apos;t as scary as I thought it was after all. 
                </Text>
                <Text as='b'>
                  (Suri-Nilay) How does my own knowledge, values, attitudes and assumptions of past and present experiences influence the way I feel or act on my career pursuit?
                </Text>
                <Text>
                  For me, I had already decided since graduating high school that I was set on choosing a career path involved in IT or Computer Science. This goal that I set for myself served as my guide to the choices that I would make ever since. However, I was also really clueless about what the industry was actually like, and I think that hindered me from trying to seek out more opportunities for me to grow and learn. Now, I feel like I know better, and I want to better myself.
                </Text>
                <Text as='b'>
                  (Taya-Kilos) What would I like to change and improve about myself?
                </Text>
                <Text>
                  I know that I have a lot of weaknesses; the first of which is my indecisiveness or lack of initiative. There are times where I just don&apos;t know what the right decision is. Sometimes, I feel too scared or worried about what may happen if I fail to do something, and I just end up not doing it. I want to be more confident when it comes to new experiences, and know that even if I fail, I will still have grown as a person. I also want to become a more outgoing and social person, as I know that having social skills is very important in the career world, being just as important or even more important than raw technical skill.
                </Text>
                <Text as='b'>
                  (Ramdam-Pakiramdam) What are  the implications of my actions for my career plans, myself and others?
                </Text>
                <Text>
                  With all that I&apos;ve learned, I feel more confident in my plans and what actions I should take to further those plans moving forward. Hopefully, I can find a place where I can feel contented with my career, and know that I am making a positive impact on the world somehow.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Stack>
    </main>
  );
}

function downloadResume(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  saveAs(
    '/SANTIAGO_PHILIP_CV.pdf',
    'Resume.pdf'
  )
  console.log('clicked!')
}