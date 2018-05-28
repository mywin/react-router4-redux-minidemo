module.exports = (webpackConfig, env) => {
  // 别名配置
  webpackConfig.resolve.alias = {
    '@': `${__dirname}/src`,
  }
  return webpackConfig
}