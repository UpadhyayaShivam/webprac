import React from 'react';
import {Container,Box,Text} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Login';
import Signup from '../Components/Signup';


const HomePage = () => {
  return (
    <>
      <Container maxW="60%" centerContent>
        <Box bg={"white"} d='flex' justifyContent='center'  p={3}  w="100%" borderRadius="lg" borderWidth="1px" m="40px 0 15px 0">
          <Text fontSize="4xl" fontFamily="Work sans" color="black">
              FUN MATE
          </Text>
        </Box>
        <Box bg={"white"} d='flex' justifyContent='center' p={3}  w="100%" borderRadius="lg" borderWidth="1px" m="0px 0 15px 0">

          <Tabs variant='soft-rounded' colorScheme='green'>
              <TabList>
                <Tab width="50%">Login</Tab>
                <Tab width="50%">Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login/>
                </TabPanel>
                <TabPanel>
                  <Signup/>
                </TabPanel>
              </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
