import { Box, Button, Center, Link, FormControl, FormLabel, Input, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobile,setMobile] = useState("")
  const toast = useToast();
  const navigate = useNavigate()


const handleSubmit = (e) =>{
  e.preventDefault();

  const payload={
    name,
    mobile,
    email,
    password,
    
}

if(payload.mobile.length<10){
  toast({
    title:"Invalid mobile number",
    description:"mobile number should be 10digits",
    status:"error",
    position:"top",
    duration:5000,
    isClosable:true,
  })
} else {
  fetch("http://localhost:8282/users/register",{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(payload)
        }).then((res)=>res.json()).then(res => {

            if(res.msg==="Already had registerd plz login"){
                toast({
                  title:"Signup failed",
                  description:"User already exist, Please login",
                  status:"error",
                  position:"top",
                  duration:5000,
                  isClosable:true,
                })
            
                return navigate("/login")
              } else if(res.msg==="Sign Up Successfull"){
                toast({
                  title:"Signup successfull",
                  description:"Account has been created, Please login",
                  status:"success",
                  position:"top",
                  duration:5000,
                  isClosable:true,
                })
            
              return  navigate("/login")
              } else {
                toast({
                  title:"Signup failed",
                  description:"Something went wrong",
                  status:"error",
                  position:"top",
                  duration:5000,
                  isClosable:true,
                })
              }

        })

}
  
}


  return (
    <>

<Box display="flex" justifyContent="center" mr="20px">



<Box width={{base:"xs", sm:"xs", md:"xl", lg:"lg"}} >
    <Center mt="15px" fontSize="35px" fontWeight="bold">Register</Center>
    <Center mt="15px">Please fill in the fields bellow:</Center>
  
<form onSubmit={handleSubmit}>

<VStack  width="full" boxShadow="xl"  py={{base:4, sm:4, md:4, lg:6 }} my={{base:4, sm:4, md:8, lg:10 }} px={{base:1, sm:1, md:4, lg:6 }}>

<FormControl isRequired>
<FormLabel>Name</FormLabel>
<Input name="name" type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}  />


</FormControl>

<FormControl isRequired>
<FormLabel>Mobile</FormLabel>
<Input name="mobile" type="number" placeholder="Enter Mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)}  />


</FormControl>

<FormControl isRequired>
<FormLabel>Email adress</FormLabel>
<Input name="email" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />

</FormControl>

<FormControl isRequired >
<FormLabel>Password</FormLabel>
<Input name="password" type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}   />


</FormControl>

<FormControl>
<Center>
  <Button 

w="full"  _hover={{
          bg: "red.600",
        }} variant="outline" color="white" bg="rgb(228, 37, 41)" mt={4} type="submit" ><Link textDecoration="none" >Register</Link></Button>
</Center>

</FormControl>

<Box>already have account? <Link href="/login" textDecoration="underline" color="blue" fontSize="16px" fontWeight="semibold">Login</Link> </Box>

</VStack>

  </form>

</Box>
</Box>
      
    </>
  )
}

export default Register
