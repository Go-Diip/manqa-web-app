import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const styledLink = css`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`

export const CustomRegularLink = styled.a`
  ${styledLink};
`

export const CustomLink = styled(Link)`
  ${styledLink};
`

export const CustomAniLink = styled(AniLink)`
  ${styledLink};
`
