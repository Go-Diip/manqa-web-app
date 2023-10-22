/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

function SEO({ data, meta }) {
  if (!data) return null

  const {
    metaDesc,
    title,
    canonical,
    metaRobotsNofollow,
    opengraphSiteName,
    opengraphDescription,
    twitterDescription,
    twitterTitle,
    twitterImage,
    opengraphTitle,
    opengraphImage,
    opengraphUrl,
    opengraphType,
    opengraphModifiedTime,
    metaRobotsNoindex,
    opengraphAuthor,
    focusKw,
    metaKeyWords,
    openGraphAuthor,
  } = data

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: `${process.env.GATSBY_WEBSITE_URL}`,
    name: title,
    description: opengraphDescription,
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {title && <title>{title}</title>}

      {/* General tags */}
      {metaDesc && <meta name="description" content={metaDesc} />}

      {process.env.GATSBY_ACTIVE_ENV === "production" && metaRobotsNoindex ? (
        <meta
          name="robots"
          content={`${metaRobotsNoindex}, ${metaRobotsNofollow}`}
        />
      ) : (
        <meta name="robots" content="noindex" />
      )}

      {canonical && <link rel="canonical" href={`${process.env.GATSBY_WEBSITE_URL}${canonical}`} />}

      {/* OpenGraph tags */}

      {opengraphUrl && <meta property="og:url" content={`${process.env.GATSBY_WEBSITE_URL}${opengraphUrl}`} />}

      {opengraphTitle && <meta property="og:title" content={opengraphTitle} />}

      {opengraphDescription && (
        <meta property="og:description" content={opengraphDescription} />
      )}

      {opengraphType && <meta property="og:type" content={opengraphType} />}

      {opengraphSiteName && (
        <meta property="og:site_name" content={opengraphSiteName} />
      )}

      {opengraphImage && (
        <meta property="og:image" content={opengraphImage.sourceUrl} />
      )}

      {opengraphAuthor && (
        <meta property="og:author" content={openGraphAuthor} />
      )}

      {/* Twitter Card tags */}

      {twitterTitle && <meta name="twitter:title" content={title} />}

      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}

      {twitterImage && (
        <meta name="twitter:image" content={twitterImage.sourceUrl} />
      )}
    </>
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  data: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
