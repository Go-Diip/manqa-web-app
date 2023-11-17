import styled from "@emotion/styled"
import CustomLink from "../../custom-link/custom-link.component"
import { Menu, Typography } from "@mui/material"

export const StyledLink = styled.a`
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
`

export const StyledText = styled(Typography)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    right: -16px;
    width: 14px;
    height: 14px;
  }
  &.with-icon {
    margin-right: 1rem;
  }
`

export const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
    margin-top: 1.25rem;
    /* border: 0; */
    border-radius: 0;
  }
  .MuiMenu-list {
    padding: 0;
  }
  .MuiMenuItem-root {
    border-bottom: 1px solid rgba(112, 121, 122, 0.5);
    background: ${({ theme }) => theme.palette.text.secondary};
    transition: all 0.3s ease;
    :hover {
      background: rgba(0, 0, 0, 0.125);
    }
    :last-of-type {
      border-bottom: 0;
    }
  }
`
