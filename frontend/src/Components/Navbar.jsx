import React from 'react'
import {Box, HStack, Image, Input, Text} from "@chakra-ui/react"
import logo from "../Logo/HI-FI-2.png"
import {RiUser3Line} from 'react-icons/ri'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box>

      <HStack justifyContent="space-between" w="100%" ml="10px" mr="10px" m="auto" p="10px" boxShadow='md'>
      <Box>
        <Image src={logo} w="220px" h="70px" />
      </Box>
      <HStack justifyContent="space-between" w="30%">
        <Text>CATEGORIES</Text>
        <Text>DAILY DEALS</Text>
        <Text>GIFT WITH HI-FI</Text>
        <Text>MORE</Text>
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
