import { Box, Img, Link } from '@chakra-ui/react'
import Carousel from 'better-react-carousel'
import React from 'react'

const bannerSliderimg=[
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/carousel_banner_445x.png?v=1671097960"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone_1_445x.png?v=1670244742"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/newsletter_carousel-banner_445x.png?v=1672738706"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/445-360_without_CTA_445x.jpg?v=1669790046"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bring_Your_World_On_Your_Wrist_446x360_66921214-c5ee-4bda-a433-f52b1c2124d4_445x.jpg?v=1672749745"
    }
]

const BannerSlider = () => {
  return (
    <div>
        <Box w="97.5%" m="auto">
      <Carousel
        cols={3}
        rows={1}
        gap={50}
        loop={true}
        showDots={true}
        autoplay={3000}
      >
        {bannerSliderimg.map((img) => (
          <Carousel.Item key={img.image}>
            <Link>
              <Img borderRadius="5px" w="100%" src={img.image} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
      </Box>
    </div>
  )
}

export default BannerSlider
