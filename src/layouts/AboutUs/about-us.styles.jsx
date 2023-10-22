import styled from "@emotion/styled"
import { Container, Typography } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.text.light};
`

export const TopWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`

export const TopContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  line-height: 3rem;
  text-transform: uppercase;
`

export const Description = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem("21")};
  font-weight: 300;
  line-height: 2rem;
  max-width: 720px;
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
  padding: 1rem 1.375rem;
`

export const ItemTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

export const StyledBtn = styled(CustomButton)`
  padding: 0.65rem 1rem !important;
  white-space: nowrap;
`
