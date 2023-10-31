import React, { useState, useRef } from "react"
import * as S from "./home-hero.styles"
import Logo from "../../assets/logo.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { Box, Collapse } from "@mui/material"
import { RESERVATIONS_ENABLED } from "../../utils/constants"

const HomeHero = ({ sliderItems }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const handleSlideChange = index => {
    setCurrentSlide(index)
    sliderRef.current.swiper.slideTo(index)
  }

  return (
    <S.Section>
      <S.Wrapper>
        <Box />
        <Box>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <S.LinksWrapper>
            {RESERVATIONS_ENABLED && (
              <S.StyledLink url="/reservaciones/">Reservar</S.StyledLink>
            )}
            <S.LinkWrapper>
              <S.ParentLink onClick={() => setIsOpenMenu(!isOpenMenu)}>
                Menú
                {isOpenMenu ? <RemoveIcon /> : <AddIcon />}
              </S.ParentLink>
              <Collapse
                in={isOpenMenu}
                mountOnEnter
                unmountOnExit
                timeout={400}
              >
                <S.SubItemsWrapper>
                  <S.SubItem>Carta de alimentos</S.SubItem>
                  <S.SubItem>Menú del día</S.SubItem>
                  <S.SubItem>Bebidas</S.SubItem>
                  <S.SubItem>Carta de vinos</S.SubItem>
                </S.SubItemsWrapper>
              </Collapse>
            </S.LinkWrapper>
          </S.LinksWrapper>
        </Box>
        <S.BottomWrapper>
          <S.PaginationWrapper>
            {sliderItems?.map((_, index) => (
              <S.PaginationItem
                onClick={() => handleSlideChange(index)}
                className={currentSlide === index ? "active" : ""}
                key={`slide-${index}`}
              />
            ))}
          </S.PaginationWrapper>
          <S.Name>{sliderItems?.[currentSlide]?.name}</S.Name>
        </S.BottomWrapper>
      </S.Wrapper>
      <S.SliderWrapper>
        <Swiper
          ref={sliderRef}
          loop={true}
          slidesPerView={1}
          modules={[Autoplay]}
        >
          {sliderItems?.map(({ image, name }, index) => (
            <SwiperSlide key={`${index}-Testimonials}`}>
              <S.SlideImage img={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SliderWrapper>
    </S.Section>
  )
}

export default HomeHero
