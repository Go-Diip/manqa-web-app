import styled from "@emotion/styled"
import { Container, Typography } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: ${({ theme }) => theme.navHeight}px;
  }
`

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
  ${({ theme }) => theme.breakpoints.down("sm")} {
    align-items: center;
    .logo {
      path {
        fill: ${({ theme }) => theme.palette.text.secondary};
      }
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: all;
  margin-bottom: 1rem;
  flex-direction: column-reverse;
  gap: 1rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 100%;
    flex-direction: row;
    gap: 0;
    margin-bottom: 2rem;
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    gap: 1rem;
  }
`

export const PaginationItem = styled.div`
  border-radius: 50%;
  background-color: rgba(238, 239, 236, 0.7);
  width: 8px;
  height: 8px;
  cursor: pointer;
  &.active {
    background-color: #eeefec;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 18px;
    height: 18px;
  }
`

export const Name = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 100%;
  font-weight: 300;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    text-align: right;
    color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 1.125rem;
    line-height: ${({ theme }) => theme.typography.pxToRem(21)};
  }
`

export const SlideImage = styled(CustomImage)`
  /* position: absolute; */
  height: 100vh;
  min-height: 500px;
  max-height: 1000px;
  img {
    object-position: right;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      object-position: 25% 0;
    }
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: calc(100vh - ${({ theme }) => theme.navHeight}px);
  }
`

export const ImageFilter = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    rgba(61, 67, 49, 0.42) 0%,
    rgba(61, 67, 49, 0.42) 100%
  );
  pointer-events: none;
  z-index: 2;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`

export const LogoWrapper = styled.div`
  margin-bottom: 3rem;
  pointer-events: all;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 220px;
    margin-bottom: 0;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  pointer-events: all;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`

export const LinkWrapper = styled.div``

export const SubItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
  gap: 0.75rem;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 0.5rem;
    margin-top: 0.75rem;
  }
`

export const SubItem = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.primary.light};
  letter-spacing: -0.27px;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 300;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.pxToRem("15")};
    line-height: ${({ theme }) => theme.typography.pxToRem("18")};
  }
`

export const StyledLink = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  font-weight: 500;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem("21")};
    line-height: normal;
  }
`

export const ParentLink = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.125rem;
  position: relative;
  margin-right: 1.5rem;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  cursor: pointer;
  svg {
    font-size: 1rem;
    position: absolute;
    top: -2px;
    right: -24px;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem("21")};
    line-height: normal;
  }
`
