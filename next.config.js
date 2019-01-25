const path = require('path');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const typescript = require('@zeit/next-typescript');
const bundleAnalyzer = require("@zeit/next-bundle-analyzer");
module.exports = withPlugins([
  [sass, {
    cssModules: true,
    sassLoaderOptions: {
      includePaths: [
        'node_modules',
        'src/styles'
      ]
    }
  }],
  [typescript],
  [bundleAnalyzer, {
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      browser: {
        analyzerMode: 'static',
        reportFilename: '../.bundles/client.html'
      }
    }
  }]
], {
  distDir: '../.next',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
  // Reference to nextjs.org/docs/#static-html-export
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  }
});
