import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.text.secondary};
  padding-top: 0.5rem;
  padding-bottom: 7rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 2.5rem;
    padding-bottom: 5.5rem;
  }
`

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: ${({ theme }) => theme.typography.pxToRem("51")};
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export const SliderWrapper = styled.div`
  position: relative;
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  inset: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
`

export const ArrowBtn = styled.div`
  pointer-events: all;
  transition: opacity 0.3s ease;
  &.gallery-prev {
    svg {
      transform: rotate(180deg);
    }
  }
  &.swiper-button-disabled {
    opacity: 0;
  }
`
