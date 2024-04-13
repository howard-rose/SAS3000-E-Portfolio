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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Stack spacing='50px'>
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
              <Heading>Hello, I'm Philip Santiago!</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize='20px'>
                Welcome to my E-Portfolio! I'm Philip, a 3rd year student currently taking Bachelor of Science and Master of Science in Computer Science at De La Salle University - Manila.
                Programming and problem solving are some of my passions, and I'm aspiring to become a software developer/engineer in the future.
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={downloadResume}>Download my Resume!</Button>
            </CardFooter>
          </Stack>
        </Card>

        

        <Tabs isFitted variant='enclosed' minW='1000' maxW='1000'>
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

                Generally, I try to stay within my comfort zone, but I'd like to try being more open-minded and try out new things more often.
              </Text>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
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