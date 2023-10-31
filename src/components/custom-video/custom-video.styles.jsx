import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.text.light};
  width: 100%;
  display: flex;
  ${({ paddingpercentage }) =>
    paddingpercentage
      ? css`
          padding-top: ${paddingpercentage}%;
          position: relative;
          video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `
      : css``}
  iframe {
    width: 100%;
  }
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* object-fit: cover; */
`

export const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
  }
`
