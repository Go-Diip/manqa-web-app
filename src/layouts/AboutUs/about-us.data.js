import { graphql } from "gatsby"

export const query = graphql`
  fragment AboutUs on WpPage_Pagebuilder_Layouts_AboutUs {
    fieldGroupName
    title
    description
    items {
      title
      subItems {
        button {
          title
          url
          target
        }
      }
      video {
        mediaItemUrl
      }
    }
  }
`
