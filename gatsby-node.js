exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: '/about', toPath: '/about2',
    redirectInBrowser: true,
    isPermanent: true,
  })
}