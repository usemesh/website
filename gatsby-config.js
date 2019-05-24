module.exports = {
  siteMetadata: {
    title: `Mesh`,
    description: `Mesh Technologies Website`,
    author: `@usemeshapp`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mesh-website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#419799`,
        theme_color: `#419799`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    "gatsby-plugin-netlify",
  ],
}
