import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Wrapper = styled.div`
  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
  }

  img {
    object-fit: ${({ fit }) => fit} !important;
  }

  ${({ paddingpercentage }) =>
    paddingpercentage
      ? css`
          height: auto !important;
          position: relative;
          padding-top: ${paddingpercentage}%;

          .gatsby-image-wrapper,
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            //transform: none;
          }
        `
      : ""};
`
