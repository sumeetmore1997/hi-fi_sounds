import { Box, HStack, Image, Img, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from "better-react-carousel";
import BannerSlider from '../Homepart/BannerSlider';

const slideimg = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/we-banner-sharktank_2_9a61da5e-4113-4a94-b877-aeb7f16e7e72_1600x.jpg?v=1673003585",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-131_desktop_1600x.jpg?v=1675066019",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_14329a9e-8a5d-4795-8a7a-50d40065a33f_1600x.jpg?v=1675417827",
  }
];


const Home = () => {
  return (
    <>
    <Stack m="auto" direction="row" justifyContent="space-around" w="95%" mt="10px" p="10px" bg="#e8edf0" borderRadius="2px">
      <HStack justifyContent="space-evenly" w="15%">
        <Image h="50px" w="50px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_2_small.png?v=1663586590"/>
        <Text w="120px">1 YEAR WARRANTY</Text>
      </HStack>
      <HStack justifyContent="space-evenly" w="15%">
      <Image h="50px" w="50px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_3_small.png?v=1663586612"/>
        <Text w="120px">FREE 7 DAYS REPLACEMENT</Text>
      </HStack>
      <HStack justifyContent="space-evenly" w="15%">
      <Image h="50px" w="50px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_1_small.png?v=1663586576"/>
        <Text w="100px">FREE SHIPPING</Text>
      </HStack> 
      <HStack justifyContent="space-evenly" w="15%">
      <Image h="50px" w="50px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_4_small.png?v=1663586627"/>
        <Text w="120px">SECURE CHECKOUT</Text>
      </HStack>
      <HStack justifyContent="space-evenly" w="15%">
      <Image h="50px" w="50px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-black-v1_small.png?v=1661245767"/>
        <Text w="80px">GST BILLING</Text>
      </HStack>
    </Stack>

<Box w="97.5%" m="auto" mt="10px">
    <Carousel   
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        showDots={true}
        autoplay={2000}
      >
        {slideimg.map((img) => (
          <Carousel.Item key={img.image}>
            <Link>
              <Img w="100%" src={img.image} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
      </Box>

      <BannerSlider/>

    </>
  )
}

export default Home
