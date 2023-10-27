import React from "react"
import * as S from "./images-gallery.styles"
import { useTheme } from "@emotion/react"
import { Container, Grid, useMediaQuery } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Arrow from "../../assets/arrow-slider.svg"

const ImagesGallery = ({ images }) => {
  const theme = useTheme()
  const upSm = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <S.Section>
      <Container>
        <S.Title>Galería</S.Title>
        {upSm ? (
          <Grid container spacing={2}>
            {images?.map(({ image }, index) => (
              <Grid item xs={6} md={4} key={`image-${index}`}>
                <CustomImage img={image} arPaddingPercentage={150} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <S.SliderWrapper>
            <Swiper
              slidesPerView={1}
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".gallery-prev",
                nextEl: ".gallery-next",
              }}
            >
              {images?.map(({ image }, index) => (
                <SwiperSlide key={`${index}-gallery}`}>
                  <CustomImage img={image} arPaddingPercentage={150} />
                </SwiperSlide>
              ))}
            </Swiper>
            <S.ButtonsWrapper>
              <S.ArrowBtn className="gallery-prev">
                <Arrow />
              </S.ArrowBtn>
              <S.ArrowBtn className="gallery-next">
                <Arrow />
              </S.ArrowBtn>
            </S.ButtonsWrapper>
          </S.SliderWrapper>
        )}
      </Container>
    </S.Section>
  )
}

export default ImagesGallery
