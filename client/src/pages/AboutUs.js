import { Avatar, Box, Heading, Text, Link, Flex, HStack, Card, Stack, CardBody, CardFooter, Button } from "@chakra-ui/react";
import React from "react";

export default function AboutUs() {
  return (
    <Flex bgGradient='linear(to-r, teal.200, teal.400)' alignItems="center" justifyContent="center" direction="column">
    {/* Thanks for visiting */}
      <Heading m="3">
        Thanks for Visiting Our Shop!
      </Heading>

      <HStack m="3" gap="5">
        <Link color='#826e9b' href='#Team'>
          Our Team
        </Link>
        <Link color='#826e9b' href='#Inspiration'>
          Our Inspiration
        </Link>
        <Link color='#826e9b' href='#Future'>
          Future Goals
        </Link>        
      </HStack>

{/* Our Team Section */}
      <Box id="Team">
        <div>
          <Heading py="5">
            Our Team
          </Heading>          
        </div>

        <Flex direction="column" justifyContent="center">
          <Stack>
          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px">
            <Avatar size='xl' name='Asmita Pokhrel' src='https://devasmi.github.io/portfolio/IMG-0438.jpg'/>
            <Stack width="700px" ml="3">
              <CardBody>
                <Heading size='md'>Asmita Pokhrel</Heading>

                <Text py='2'>
                Asmita is a super star coder and loves to dance in her free time. She helped our wonderful shop come up with its straightforward slogan!
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' bgColor='#826e9b' color="white">
                  <Link href="https://github.com/devAsmi" target="_blank">GitHub</Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px">
            <Avatar size='xl' name='Melissa Gillen' src='https://stamperm.github.io/gillen_portfolio/melissa.jpg' />
            <Stack width="700px" ml="3">
              <CardBody>
                <Heading size='md'>Melissa Gillen</Heading>

                <Text py='2'>
                Melissa excels in leadership and multi-tasking e.g. juggling momhood, going to school, and keeping her job afloat!
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' bgColor='#826e9b' color="white">
                  <Link href="https://github.com/StamperM" target="_blank">GitHub</Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px">
            <Avatar size='xl' name='Teresa Rodriguez' src='https://avatars.githubusercontent.com/u/120215479?v=4' />
            <Stack width="700px" ml="3">
              <CardBody>
                <Heading size='md'>Teresa Rodriguez</Heading>

                <Text py='2'>
                Teresa is super passionate about web development, and she may like the outdoors in her free time?!
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' bgColor='#826e9b' color="white">
                  <Link href="https://github.com/teresarod11" target="_blank">GitHub</Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px">
            <Avatar size='xl' name='Kayla Aguilera' src='https://avatars.githubusercontent.com/u/118678899?v=4' />
            <Stack width="700px" ml="3">
              <CardBody>
                <Heading size='md'>Kayla Aguilera</Heading>

                <Text py='2'>
                Kayla is dedicated to learning more about coding, and she came up with the shops name, inspired by her many close friends and family who are caffeine-fiends!
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' bgColor='#826e9b' color="white">
                  <Link href="https://github.com/kaguilera23" target="_blank">GitHub</Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          </Stack>

        </Flex>
      </Box>

{/* Our Inspiration Section */}
      <Box id="Inspiration">
        <div>
          <Heading py="5">
            Our Inspiration
          </Heading> 
        </div>

        <Flex direction="column" justifyContent="center">
          <Box direction={{ base: 'column', sm: 'row' }} overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px">
            <Text m="3">
              Whether it's a lazy Sunday, a busy week with your full-time coding bootcamp, or just a regular day that needs a little pick-me-up, I think everyone is a little bit of a caff-fiend at heart. There's nothing like holding a warm cup of joe on a cold, rainy day, and, alternatively, holding a cold, iced coffe or smoothie on a blazing, sunny day. Whatever the reason may be, we wanted an application where we could display all of our delicious treats and drinks in an appealing, simple manner, so that all your focus is on your cravings rather than trying to navigate the website.
            </Text>

            <Text m="3">
              If you enjoy us and find yourself coming back often, join our rewards program where you can rack up points for the wonderful treats you were going to buy anyway!
            </Text>
          </Box>
        </Flex>
      </Box>

{/* Future Goals Section */}
      <Box id="Future">
        <div>
          <Heading py="5">
            Future Goals
          </Heading> 
        </div>

        <Flex direction="column" justifyContent="center">
          <Box direction={{ base: 'column', sm: 'row' }} overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px">
            <Text m="3">
            We hope, in the future, we can help you turn your points into discounts.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
