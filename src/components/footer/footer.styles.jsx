import styled from "@emotion/styled"
import { Container, Typography } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

export const Section = styled.footer`
  padding: 2.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.text.secondary};
  ${({ theme }) => theme.breakpoints.up("md")} {
    border: 0;
    padding-top: 0;
  }
`

export const Wrapper = styled(Container)``

export const Line = styled.div`
  ${({ theme }) => theme.breakpoints.up("md")} {
    border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
    width: 100%;
    padding-top: 4.25rem;
  }
`

export const InfoText = styled(Typography)`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 2rem;
  .underline {
    text-decoration: underline;
  }
  &.diip {
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem("14")};
    }
  }
`

export const InfoAnchor = styled.a`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 2rem;
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
`

export const LogoWrapper = styled(CustomLink)`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: flex-end;
  }
`

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin-top: 2.5rem;
  gap: 1.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 4.5rem;
    flex-direction: row;
    align-items: center;
  }
`
