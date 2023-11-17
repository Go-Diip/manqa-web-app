import styled from "@emotion/styled"
import { Container, Stack, Typography } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomVideo from "../../components/custom-video/custom-video.component"

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.text.secondary};
`

export const TopWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`

export const TopContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
    gap: 2rem;
  }
`

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 100%;
  margin-bottom: 1.5rem;
  font-weight: 300;
  ${({ theme }) => theme.breakpoints.up("md")} {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
  }
`

export const Description = styled(Typography)`
  font-weight: 300;
  max-width: 720px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem("21")};
    line-height: 2rem;
  }
`

export const MiddleWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    background-color: white;
  }
`

export const BottomWrapper = styled.div`
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  display: none;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: flex;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

export const PatternWrapper = styled.div`
  position: absolute;
  inset: 0;
  svg {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: auto;
    &.reverse {
      left: 0;
      right: unset;
      transform: rotate(180deg);
    }
  }
`

export const ReservationBtn = styled(CustomButton)`
  padding: 0.4rem 2.5rem;
  font-size: 0.5rem;
  line-height: ${({ theme }) => theme.typography.pxToRem("10")};
  position: relative;
  z-index: 2;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1.125rem;
    line-height: 1.25rem;
    padding: 0.65rem 5rem;
  }
`

export const ItemText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 2rem 4.75rem 4.25rem 4.75rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    background-color: ${({ theme }) => theme.palette.text.light};
    padding: 1rem 1.375rem;
  }
`

export const ButtonsWrapper = styled(Stack)`
  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 119px;
  }
`

export const ItemTitle = styled(Typography)`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 100%; /* 24px */
  letter-spacing: 0.406px;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.typography.pxToRem("30")};
  ${({ theme }) => theme.breakpoints.up("md")} {
    color: #2c6371;
    letter-spacing: 0.5px;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`

export const StyledBtn = styled(CustomButton)`
  padding: 0.45rem 1rem !important;
  white-space: nowrap;
  text-align: center;
  /* line-height: normal; */
  font-weight: 400;
  letter-spacing: 0.16px;
  font-size: 1rem;
  line-height: 1.5;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    white-space: normal;
    font-size: 1rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
  }
`

export const PatternImage = styled(CustomImage)`
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* height: 53px; */
    width: 178vw;
    margin-left: -17vw;
    margin-bottom: 3rem;
  }
`

export const StyledVideo = styled(CustomVideo)`
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-top: 130%;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 176%;
  }
`
