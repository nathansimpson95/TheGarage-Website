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
    'gatsby-plugin-offline',
  ],
}
