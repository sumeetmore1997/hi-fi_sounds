import { Box, Button, Heading, HStack, Image, Input, List, ListItem, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Logo/HI-FI-2.png"

const Footer = () => {
  return (
    <Box>
        <Box m="auto" p="10px"bg="black" color="white" >
            <Text m="auto" w="65%" lineHeight="20px">India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</Text>
        </Box>

        <Stack direction="row" mt="40px" mb="20px">
            <Box w="27%">
                <Image src={logo} w="150px" h="60px"/>
                <Text w="320px" fontSize="13px" textAlign="left" ml="13px" color="gray">Subscribe to email alerts. We promise not to spam your inbox.</Text>
                <HStack p="10px" w="350px">
                <Input  placeholder='Email Address*'/>
                <Button colorScheme="red" >SUBSCRIBE</Button>
                </HStack>
            </Box>
            <Box textAlign="left" w="25%">
                <Heading size="sm">SHOP</Heading>
                <Stack direction="row" justifyContent="space-between">
                    <Box>
                        <List>
                            <ListItem mt="10px" color="gray">
                                True Wireless Earbuds
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Wireless Headphones 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Wired Headphones 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Wireless Speakers 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Home Audio 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Mobile Accessories 
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                    <List>
                            <ListItem mt="10px" color="gray">
                             Smart Watches 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             TRebel 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Misfit 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Gift Card 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Rock In India 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Earn ₹100 
                            </ListItem>
                        </List>
                    </Box>
                </Stack>
            </Box>
            <Box textAlign="left" w="27%" pl="50px">
              <Heading size="sm">HELP</Heading>
              <Stack direction="row" justifyContent="space-between">
                    <Box>
                        <List>
                            <ListItem mt="10px" color="gray">
                                Track Your Order
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Return Policy  
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Bulk Orders 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Why Buy Direct 
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                    <List>
                            <ListItem mt="10px" color="gray">
                             Waranty & Support 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Service Centers 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             FAQs 
                            </ListItem>
                        </List>
                    </Box>
                </Stack>
            </Box>
            <Box textAlign="left" w="20%" pl="70px">
              <Heading size="sm">COMPANY</Heading>
               <List>
                            <ListItem mt="10px" color="gray">
                                About Hi-Fi
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             News  
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Read Our Blog 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Careers 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                                Security
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Terms of services  
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Privacy Policy 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Invester Relations 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Social Responsibility 
                            </ListItem>
                            <ListItem mt="10px" color="gray">
                             Warranty Policy 
                            </ListItem>
               </List>
            </Box>
        </Stack>

        <Box>
            <Stack direction="row" p="20px" justifyContent="space-between" textAlign="left" fontWeight="bold" borderTop="1px solid gray" borderBottom="1px solid gray">
                <Box>
                    <Text ml="2px">Download the App</Text>
                    <HStack>
                        <Image w="130px" h="50px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play-store_new.png?v=1666071594"/>
                        <Image w="130px" h="50px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store_new_96c42e79-8764-4292-885a-dc793dde4655.png?v=1666071566"/>
                    </HStack>
                </Box>
                <Box>
                    <Text ml="2px">We Accept</Text>
                    <Image h="50px" w="450px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/g_54cc0f26-12a4-4bd1-adca-676746073e7a_617x.png?v=1674109066"/>
                </Box> 
            </Stack>
        </Box>
      
    </Box>
  )
}

export default Footer
