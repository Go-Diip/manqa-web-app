import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const Section = styled.section`
  padding-top: 3.25rem;
  padding-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.palette.text.secondary};
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export const Content = styled.div`
  font-weight: 300;
  line-height: 1.25rem;
  h1 {
    /* text-align: center; */
    font-size: 1.5rem;
    font-weight: 600;
    line-height: ${({ theme }) => theme.typography.pxToRem("30")};
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-bottom: 5rem;
    }
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    text-align: center;
    max-width: 370px;
  }
  &.remove-margin {
    p:first-of-type {
      margin-top: 0;
    }
  }
`

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  line-height: ${({ theme }) => theme.typography.pxToRem("30")};
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
    line-height: ${({ theme }) => theme.typography.pxToRem("51")};
  }
`
