module.exports = {
  siteMetadata: {
    title: 'The Garage - Love Cars? Join the Club',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FF0000',
        theme_color: '#FF0000',
        display: 'minimal-ui',
        icon: 'src/images/theGarage-symbol.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127798688-1",
        head: true,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`
  ],
}
