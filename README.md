<h1 align="center">
  Aftershock - Gatsby + Wordpress default starter
</h1>

1. **Start developing.**

    Create a file in the root called `.env.development` with the corresponding WORDPRESS_URL (see .env.example)

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-project/
    npm install
    gatsby develop
    ```

2. **Open the source code and start editing**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

3. **Starting a new project**

    - Add the required fonts, if it's a Google font use `gatsby-theme-material-ui` in `gatsby-config.js`. If it's a local font, import it in `app.styles.jsx` (make sure to save it the `static` folder)
    - Add the theme variables under `gatsby-theme-material-ui-top-layout/theme.js` (colors, font, navHeight, etc)
    - Start creating layouts (see instructions below)

4. **Creating Layouts**

    - Create a directory with the name of your new layout under `/src/layouts`.
    - Make sure your layout contains 4 files: `index.js`, `layout-name.component.jsx`, `layout-name.data.js` and `layout-name.styles.jsx`.
    - Add the layout fragment in the corresponding template (e.g. page.template.jsx).
    - Add the layout to `get-layout-utils.js`
    - To start creating pages make sure to uncomment the corresponding function under `gatsby-node.js`
    - Add all the layouts with the corresponding variations and name in `pages/layouts.js` - this will serve as a directory later on for ourselves and the client, make sure to always keep it updated and working.

    NOTE: Make sure to reference the `MiscContent` included layout.

5. **Pulling data from WordPress**
    - Make sure you've added the corresponding WP URL in your .env file (see step 1)
    - Go to `gatsby-config.js` and make sure the `gatsby-source-wordpress` plugin is not commented.
    - In `gatsby-node.js` make sure the `createPages` is uncommented function to start generating pages from WP (use createPosts for blog posts and add more if needed)

## Featured libraries

1.  **`material-ui`**: CSS framework
2.  **`gatsby-plugin-image`**: Handle lazy loading / resize images / WebP - etc.
3.  **`react-hook-forms`**: Form validation
4.  **`gatsby-pagination`**: Handle pagination
5.  **`emotion`**: CSS-in-JS
6.  **`react-modal-video`** Open YouTube - Vimeo or local videos in a modal - popup
7.  **`swiper`**: Carousel - Slider
8.  **`html-react-parser`**: Parse HTML from string (validate to prevent errors)
9.  **`gatsby-plugin-transition-link`**: Add transitions when changing between pages
