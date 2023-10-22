let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(
  `This WordPress Endpoint is used: '${process.env.GATSBY_WORDPRESS_URL}'`
)

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_WEBSITE_URL,
  },
  flags: {
    // FAST_DEV: true,
    // DEV_SSR: false,
    // FAST_REFRESH: true,
  },
  plugins: [
    // `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`,
    // Make sure this plugin is first in the array of plugins
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-111111111-1",
    //     // this option places the tracking script into the head of the DOM
    //     head: true,
    //     // other options
    //   },
    // },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/404`, `/layouts`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.WEBSITE_URL,
        sitemap: `${process.env.GATSBY_WEBSITE_URL}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
     {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          quality: 100,
        }
      }
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `DM Sans`,
                variants: [`400`, `500`, `700`],
              },
              {
                family: `Bebas Neue`,
                variants: [`400`, `500`, `700`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `transparent`,
    //     theme_color: `#39C33A`,
    //     // icon: `src/assets/icons/short-logo.svg` // This path is relative to the root of the site.
    //   },
    // },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `${process.env.GATSBY_WORDPRESS_URL}/graphql`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
