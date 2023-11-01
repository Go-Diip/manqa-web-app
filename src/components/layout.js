/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../components/header/header.component"
import { AppContainer } from "../styles/app.styles"
import Footer from "./footer/footer.component"
import { isBrowser } from "../utils/utils"

const Layout = ({ children, hideHeader, hideFooter, isHome }) => {
  useEffect(() => {
    if (isBrowser) {
      const documentHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty("--viewport-height", `${window.innerHeight}px`)
      }

      window.addEventListener("resize", documentHeight)
      documentHeight()

      // Return a cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", documentHeight)
      }
    }
  }, [])
  return (
    <>
      {!hideHeader && <Header isHome={isHome} />}
      <AppContainer hiddenheader={hideHeader || isHome}>
        {children}
      </AppContainer>
      {!hideFooter && <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
