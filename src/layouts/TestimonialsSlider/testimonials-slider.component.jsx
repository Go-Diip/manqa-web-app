import React from "react"
import * as S from "./testimonials-slider.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import parse from "html-react-parser"
import { Container, Grid } from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import CustomImage from "../../components/custom-image/custom-image.component"

const TestimonialsSlider = ({ sliderItems, instagram, instagramImages }) => {
  return (
    <S.Section>
      <Container>
        <S.SliderWrapper>
          <Swiper
            // loop={true}
            slidesPerView={1}
            modules={[Autoplay, Navigation]}
            //   autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            //   }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
          >
            {sliderItems?.map(({ title, content }, index) => (
              <SwiperSlide key={`${index}-Testimonials}`}>
                <S.Slide>
                  <S.Title>{title}</S.Title>
                  {content && <S.Content>{parse(content)}</S.Content>}
                </S.Slide>
              </SwiperSlide>
            ))}
          </Swiper>
          <S.ButtonsWrapper>
            <S.ArrowBtn className="testimonial-prev">
              <ArrowForwardIosRoundedIcon />
            </S.ArrowBtn>
            <S.ArrowBtn className="testimonial-next">
              <ArrowForwardIosRoundedIcon />
            </S.ArrowBtn>
          </S.ButtonsWrapper>
        </S.SliderWrapper>
        <S.Instagram>Instagram {instagram}</S.Instagram>
        <Grid container spacing={2.5}>
          {instagramImages?.map(({ image }, index) => (
            <Grid item xs={12} sm={4} key={`instagram-${index}`}>
              <CustomImage img={image} arPaddingPercentage={100} fit="cover" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.Section>
  )
}

export default TestimonialsSlider
