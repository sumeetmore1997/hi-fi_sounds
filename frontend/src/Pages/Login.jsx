import { Box, Button, Center, FormControl, Link, FormLabel, Input, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

const toast = useToast();
const navigate = useNavigate()


const handleLogin = (e) =>{
e.preventDefault();

const payload={
  email,
  password,
  
}

fetch("http://localhost:8282/users/login",{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
              "Content-type":"application/json"
          }
      }).then(res=>res.json())
      .then(res=>{
        console.log(res)
        localStorage.setItem("token",res.token)
        localStorage.setItem("user", JSON.stringify(res.userData) )
      if(res.msg==="Login Successfull"){
        toast({
          title:"Login Successfull",
          description:"You are redirected to home page",
          status:"success",
          position:"top",
          duration:5000,
          isClosable:true,
        })

        navigate("/")
      } else if(res.msg==="wrong credential"){
        toast({
          title:"Login failed",
          description:"Wrong credentials",
          status:"error",
          position:"top",
          duration:5000,
          isClosable:true,
        })
      } else if(res.msg==="Please Signup first"){
        toast({
          title:"User not found",
          description:"Please Signup first",
          status:"error",
          position:"top",
          duration:5000,
          isClosable:true,
        })
      } else {
        toast({
          title:"Login failed",
          description:"Something went wrong",
          status:"error",
          position:"top",
          duration:5000,
          isClosable:true,
        })
      }
      })
      .catch(err=>console.log(err)) 
}


  return (
    <>

<Box w="90%" m="auto">
  <Center>

    <Box width={{base:"xs", sm:"full", md:"xl", lg:"lg"}} >

    <form onSubmit={handleLogin}>

      <VStack  width="full" boxShadow="xl"  py={{base:4, sm:4, md:4, lg:6 }} my={{base:4, sm:4, md:8, lg:10 }} px={{base:1, sm:1, md:4, lg:6 }}>

        

        <FormControl isRequired>
          <FormLabel>Email adress</FormLabel>
          <Input name="email" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />

        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" placeholder="Enter Password"  value={password} onChange={(e)=>setPassword(e.target.value)}  />
          
          
        </FormControl>

        <FormControl>
          <Center>
            <Button 
 
       w="full"  _hover={{
                    bg: "red.600",
                  }} variant="outline" color="white" bg="rgb(228, 37, 41)" mt={4} type="submit" ><Link to="/" textDecoration="none" >LOGIN</Link></Button>
          </Center>

        </FormControl>

        <Box>Don't have account? <Link href="/register" textDecoration="underline" color="blue" fontSize="16px" fontWeight="semibold">Register</Link> </Box>

      </VStack>

      </form>

    </Box>
    </Center>
    </Box>
      
    </>
  )
}

export default Login
