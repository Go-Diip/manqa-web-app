import styled from "@emotion/styled"
import { Container, Typography } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.text.light};
`

export const TopWrapper = styled.div`
  padding-top: 3.375rem;
  padding-bottom: 3.375rem;
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
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 600;
  ${({ theme }) => theme.breakpoints.up("md")} {
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
`

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

export const ReservationBtn = styled(CustomButton)`
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.65rem 5rem;
  }
`

export const ItemText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 1rem 1.25rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 1rem 1.375rem;
  }
`

export const ItemTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.pxToRem("10")};
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1rem;
    line-height: 1.25rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`

export const StyledBtn = styled(CustomButton)`
  padding: 0.65rem 1rem !important;
  white-space: nowrap;
  text-align: center;
  font-size: 0.5rem;
  line-height: normal;
  font-weight: 400;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    white-space: normal;
    font-size: 1rem;
    line-height: 1.5;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
  }
`

export const PatternImage = styled(CustomImage)`
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 53px;
  }
`
