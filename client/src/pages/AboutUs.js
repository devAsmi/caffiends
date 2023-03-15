import { Avatar, Box, Heading, Text, Link, Flex, HStack, Card, Stack, CardBody, CardFooter, Button, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons"

export default function AboutUs() {
  return (
    <Flex bgGradient='linear(to-r, teal.200, teal.400)' alignItems="center" justifyContent="center" direction="column">
    {/* Thanks for visiting */}
      <Heading m="3">
        Thanks for Visiting Our Shop!
      </Heading>

      <HStack m="3" gap="5" fontSize="2xl">
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

                <Text py='2' fontSize="xl">
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

                <Text py='2' fontSize="xl">
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

                <Text py='2' fontSize="xl">
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

                <Text py='2' fontSize="xl">
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
          <Card direction="column" overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px" fontSize="xl">
            <Text m="3">
              Whether it's a lazy Sunday, a busy week with your full-time coding bootcamp, or just a regular day that needs a little pick-me-up, I think everyone is a little bit of a caff-fiend at heart. There's nothing like holding a warm cup of joe on a cold, rainy day, and, alternatively, holding a cold, iced coffe or smoothie on a blazing, sunny day. Whatever the reason may be, we wanted an application where we could display all of our delicious treats and drinks in an appealing, simple manner, so that all your focus is on your cravings rather than trying to navigate our page!
            </Text>

            <Text m="3">
              If you enjoy us and find yourself coming back often, join our rewards program where you can rack up points for the wonderful treats you were going to buy anyway!
            </Text>

            <Text m="3">
              And if you're already a Caffriend, we want to give our biggest thanks to you for your support and understanding as we continue to improve our site!
            </Text>
          </Card>
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
          <Card direction="column" overflow="hidden" bg="#D7C0D0" justifyContent="center" alignItems="center" width="1100px">
            <Text m="3" fontSize="xl">
              We have some excited things we would like to provide our wonderful customers in the future!
            </Text>

            <List spacing={3} fontSize="xl" ml="6" p="3" textAlign="center">
              <ListItem>
                <ListIcon as={StarIcon} color='#826e9b' />
                If you want to use your free rewards from points, birthday, or referrals, simply click the button in the "My Rewards" tab and your free item will be added directly to checkout
              </ListItem>

              <ListItem>
                <ListIcon as={StarIcon} color='#826e9b' />
                Get notified of your free birthday item, promotions, expiring payment methods, and new available rewards when you login
              </ListItem>

              <ListItem>
                <ListIcon as={StarIcon} color='#826e9b' />
                Be able to copy your referral code directly from the welcome page of "My Rewards" so you can easily share it with family and friends
              </ListItem>

              <ListItem>
                <ListIcon as={StarIcon} color='#826e9b' />
                If you forgot to sign in when making your order, send us that orders information and we'll add it to your account upon verification
              </ListItem>

              <ListItem>
                <ListIcon as={StarIcon} color='#826e9b' />
                Unfortunately, if you have a bad experience, we would like to hear from you to help us improve! Be able to fill out a complaint form or delete your account under the "My Account" tab
              </ListItem>              
            </List>
          </Card>
        </Flex>
      </Box>
    </Flex>
  );
}
