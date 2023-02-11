import React from 'react'
import {Box, Button, HStack, Image, Input, List, ListItem, Popover, PopoverContent, PopoverTrigger, SimpleGrid, Text, VStack} from "@chakra-ui/react"
import logo from "../Logo/HI-FI-2.png"
import {RiUser3Line} from 'react-icons/ri'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Icon } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box>

      <HStack justifyContent="space-between" w="100%" ml="10px" mr="10px" m="auto" p="10px" boxShadow='md'>
      <Box>
        <Image src={logo} w="220px" h="70px" />
      </Box>
      <HStack justifyContent="space-between" w="35%">
        <Popover trigger="hover" offset={0} boundary="0">
          <PopoverTrigger>
            <Button
            bg
            borderRadius={0}
            _hover={{
              background: "white"
            }}
            >
            CATEGORIES
            <Icon as={ChevronDownIcon}/>
            </Button>
          </PopoverTrigger>
          <PopoverContent w="1000px" mr="100px" ml="100px">
            <SimpleGrid columns={[2,3,4]} spacing="50px" >
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1663752600"/>
                  <Text>Airdopes True Wireless</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_100x.png?v=1663752867"/>
                  <Text>Rockers Wireless</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_100x.jpg?v=1675683311"/>
                  <Text>Smart Wathes</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167"/>
                  <Text>Bassheads Wired</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243"/>
                  <Text>Stone Speakers</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1663753280"/>
                  <Text>Aavante Home Audio</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_100x.jpg?v=1675683444"/>
                  <Text>Mobile Accessories</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1675683871"/>
                  <Text>Trebel for Women</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_100x.png?v=1675683940"/>
                  <Text>Limited Edition</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_100x.png?v=1663753379"/>
                  <Text>Misfit Trimmers</Text>
                </VStack>
              </Box>
              <Box>
                <VStack>
                  <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_100x.png?v=1663753419"/>
                  <Text>Immortal Gaming</Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </PopoverContent>
        </Popover>
        {/* <Text>CATEGORIES</Text> */}
        <Text>DAILY DEALS</Text>
        <Text>GIFT WITH HI-FI</Text>
        <Popover trigger="hover" offset={0} boundary="0">
          <PopoverTrigger>
          <Button
            bg
            borderRadius={0}
            _hover={{
              background: "white"
            }}
            >
            MORE
            <Icon as={ChevronDownIcon}/>
            </Button>
          </PopoverTrigger>
          <PopoverContent w="250px" p="20px">
            <List textAlign="left" lineHeight="35px">
              <ListItem>Do What Floats Your Hi-FI</ListItem>
              <ListItem>Blogs</ListItem>
              <ListItem>Corporate Orders</ListItem>
              <ListItem>Earn ₹100</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Social Responsibility</ListItem>
              <ListItem>Meet the HI-Fiheads</ListItem>
            </List>
          </PopoverContent>
        </Popover>
        {/* <Text>MORE</Text> */}
      </HStack>
      <HStack w="30%" justifyContent="space-evenly">
        <Input placeholder='SEARCH' w="300px" />
        <Link to="/login"> <RiUser3Line size="25px"/> </Link>
        <AiOutlineShoppingCart size="25px" />
      </HStack>
      </HStack>

    </Box>
  )
}

export default Navbar
