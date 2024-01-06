import React, { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { FormControl, FormLabel} from '@chakra-ui/react';
import { Input , InputGroup,InputRightElement,Button} from '@chakra-ui/react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const handleShowPassword = () => setShowPassword(!showPassword);
    const submitHandler = ()=>{

    };

  return (
    <>
      {/* <h1>hello login</h1> */}

      <VStack spacing="5px" color="black">
        

            <FormControl id="emailPart" isRequired>
                <FormLabel>
                    Email:
                </FormLabel>
                <Input placeholder="Enter Your Email" onChange={(event)=>setName(event.target.value)}>
                </Input>
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>
                    password:
                </FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                            {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
            </FormControl>

            <Button colorScheme="green" width="100%" mt={15} onClick={submitHandler}>
                Login
            </Button>
            <Button colorScheme="teal"  width="100%" mt={15} onClick={()=>{
                setEmail("guest123@gmail.com");
                setPassword("123456");
            }}>
                Login as guest 
            </Button>

      </VStack>
    </>
  )
}

export default Login
