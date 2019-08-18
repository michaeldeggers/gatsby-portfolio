module.exports = {
  siteMetadata: {
    title: `eggs over easy`,
    description: `Portfolio Site / Blog for all things Eggs related`,
    author: `@michaeldeggers`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eggs-over-easy`,
        short_name: `eggs`,
        start_url: `/`,
        background_color: `#011919`,
        theme_color: `#011919`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
