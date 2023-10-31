import styled from "@emotion/styled"
import { IconButton, Typography } from "@mui/material"

export const Section = styled.section`
  padding-top: 3.125rem;
  padding-bottom: 3.5rem;
  background-color: ${({ theme }) => theme.palette.text.secondary};
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 10rem;
    padding-bottom: 8.5rem;
  }
  img {
    object-position: unset;
  }
`

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 1.75rem;
  margin-bottom: 3.75rem;
  ${({ theme }) => theme.breakpoints.up(400)} {
    padding: 0 3rem;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 0 6rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 10rem;
  }
`

export const Slide = styled.div`
  gap: 2rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.25rem;
  line-height: ${({ theme }) => theme.typography.pxToRem("30")};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
    line-height: ${({ theme }) => theme.typography.pxToRem("46")};
    margin-bottom: 0;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 300px;
  }
`

export const Content = styled.div`
  font-size: ${({ theme }) => theme.typography.pxToRem("14")};
  line-height: 1.25rem;
  font-weight: 300;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem("21")};
    line-height: 2rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: calc(100% - 300px);
  }
  p {
    margin: 0;
  }
  .font {
    font-size: ${({ theme }) => theme.typography.pxToRem("13")};
    a {
      color: ${({ theme }) => theme.palette.primary.main};
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
      margin-top: 10px;
    }
  }
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    left: -1rem;
    right: -1rem;
  }
`

export const ArrowBtn = styled(IconButton)`
  color: #70797a;
  &.testimonial-prev {
    transform: rotate(180deg);
  }
  &.swiper-button-disabled {
    color: #d9d9d9;
  }
`

export const Instagram = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.pxToRem("13")};
  line-height: ${({ theme }) => theme.typography.pxToRem("18")};
  margin-bottom: 1.5rem;
`
