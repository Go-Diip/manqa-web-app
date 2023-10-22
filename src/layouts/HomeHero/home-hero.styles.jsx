import styled from "@emotion/styled"
import { Container, Typography } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
`

// export const

export const Wrapper = styled(Container)`
  position: absolute;
  inset: 0;
  z-index: 3;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: none;
`

export const SliderWrapper = styled.div`
  width: 100%;
  .swiper-pagination-bullet {
    background-color: rgba(238, 239, 236, 0.7);
    margin: 0 8px;
    width: 18px;
    height: 18px;
  }
  .swiper-pagination-bullet-active {
    background-color: #eeefec;
  }
`

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: all;
  margin-bottom: 2rem;
`

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const PaginationItem = styled.div`
  border-radius: 50%;
  background-color: rgba(238, 239, 236, 0.7);
  width: 18px;
  height: 18px;
  cursor: pointer;
  &.active {
    background-color: #eeefec;
  }
`

export const Name = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.dark};
  font-size: 1.125rem;
  font-weight: 300;
  line-height: ${({ theme }) => theme.typography.pxToRem("21")};
  font-weight: 300;
  mix-blend-mode: multiply;
`

export const SlideImage = styled(CustomImage)`
  /* position: absolute; */
  height: 100vh;
  min-height: 700px;
  max-height: 1000px;
`

export const LogoWrapper = styled.div`
  margin-bottom: 3rem;
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  pointer-events: all;
`

export const LinkWrapper = styled.div``

export const SubItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const SubItem = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: ${({ theme }) => theme.typography.pxToRem("15")};
  line-height: ${({ theme }) => theme.typography.pxToRem("18")};
  letter-spacing: -0.27px;
  text-transform: uppercase;
`

export const StyledLink = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: ${({ theme }) => theme.typography.pxToRem("21")};
  line-height: ${({ theme }) => theme.typography.pxToRem("18")};
  text-transform: uppercase;
`

export const ParentLink = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: ${({ theme }) => theme.typography.pxToRem("21")};
  line-height: ${({ theme }) => theme.typography.pxToRem("18")};
  text-transform: uppercase;
  position: relative;
  margin-right: 1.5rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  svg {
    font-size: 1rem;
    position: absolute;
    top: -2px;
    right: -24px;
  }
`
