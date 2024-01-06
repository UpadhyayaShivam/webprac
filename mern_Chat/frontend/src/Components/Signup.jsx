import React, { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { FormControl, FormLabel} from '@chakra-ui/react';
import { Input , InputGroup,InputRightElement,Button} from '@chakra-ui/react';

const Signup = () => {
 
  
        {/* <h1>Signup</h1> */}

        const [showPassword, setShowPassword] = useState(false);
    const [showConfimPassword, setShowConfimPassword] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pics, setPics] = useState();
    

    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleShowConfirmPassword = () => setShowConfimPassword(!showConfimPassword);

    const postDetails = (pics) =>{

    };
    
    const submitHandler = ()=>{

    };

  return (
    <>
      {/* <h1>hello login</h1> */}

      <VStack spacing="5px" color="black">
            <FormControl id="namePart" isRequired>
                <FormLabel>
                    Name:
                </FormLabel>
                <Input placeholder="Enter Your Name" onChange={(event)=>setName(event.target.value)}>
                </Input>
            </FormControl>

            <FormControl id="emailPart" isRequired>
                <FormLabel>
                    Email:
                </FormLabel>
                <Input placeholder="Enter Your Email" onChange={(event)=>setEmail(event.target.value)}>
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
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                            {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
            </FormControl>


            <FormControl id="confirmPassword" isRequired>
                <FormLabel>
                    confirmPassword:
                </FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={showConfimPassword ? 'text' : 'password'}
                            placeholder='confim your password'
                            onChange={(event)=>setConfirmPassword(event.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowConfirmPassword
                            }>
                            {showConfimPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
            </FormControl>

            <FormControl id="picsPart" >
                <FormLabel>
                    UploadPic:
                </FormLabel>
                <Input type="file" p={1.5} accept="image/*" onChange={(event)=>postDetails(event.target.files[0])}>
                </Input>
            </FormControl>

            <Button colorScheme="green" width="100%" mt={15} onClick={submitHandler}>
                    Signup
            </Button>
      </VStack>
    </>
    
  )
}

export default Signup
