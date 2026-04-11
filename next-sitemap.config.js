/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.portcreditphysio.ca',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/api/*', '/thank-you'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/services'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/about'),
  ],
}
