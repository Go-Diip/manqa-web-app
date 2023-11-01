import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import CustomLink from "../../components/custom-link/custom-link.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const TextWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 5rem 1.5rem;
  /* ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 3rem 2rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 4rem 3rem;
  } */
  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 4rem 8.5rem;
  }
`

export const Content = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 2rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
    line-height: ${({ theme }) => theme.typography.pxToRem("46")};
  }
`

export const StyledAnchor = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: ${({ theme }) => theme.typography.pxToRem("15")};
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.27px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-top: 1.25rem;
  svg {
    position: relative;
    top: 0px;
    margin-left: 0.5rem;
    width: 12px;
    height: 12px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 16px;
      height: 16px;
      top: -3px;
    }
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
    line-height: 1;
  }
`

export const ImageWrapper = styled.div`
  height: 100%;
  /* img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      object-position: 0px -119px;
    }
  } */
`

export const StyledImage = styled(CustomImage)`
  height: 100%;
  img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      object-position: 0px 60%;
    }
  }
`
