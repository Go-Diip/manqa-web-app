import styled from "@emotion/styled"

export const Wrapper = styled.div`
  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
  }

  img {
    object-fit: ${({ fit }) => fit};
  }

  ${({ paddingpercentage }) =>
    paddingpercentage
      ? `
    height: auto !important;
    position: relative;
    padding-top: ${paddingpercentage}%; 
  
    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      //transform: none;
    }
  }
   `
      : ""};
`
