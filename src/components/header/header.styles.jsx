import styled from "@emotion/styled"
import { AppBar, Typography } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

export const Header = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.text.secondary};
  padding: 1rem 0;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    position: fixed;
    z-index: 100;
  }
  > .MuiContainer-root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.typography.pxToRem("30")};
    ${({ theme }) => theme.breakpoints.up("sm")} {
      justify-content: center;
      flex-direction: column;
    }
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 1.75rem;
    padding-bottom: 1.25rem;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  svg {
    height: auto;
  }
  max-width: 112px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 236px;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.125rem;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`

export const StyledLink = styled(CustomLink)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: 3px;
  }
`

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`

export const MobileMenu = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.navHeight}px;
  width: 100%;
  background: ${({ theme }) => theme.palette.text.secondary};
  svg {
    width: 14px;
    height: 14px;
  }
  .MuiContainer-root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  > .MuiCollapse-root {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`

export const MenuTitle = styled(Typography)`
  color: #363636;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
`

export const MobileMenuItem = styled(CustomLink)`
  padding: 0.75rem 2.5rem;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(112, 121, 122, 0.5);
  :last-of-type {
    border-bottom: 0;
  }
`
