const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const WebpackBar = require('webpackbar');

module.exports = {
    webpack: {
        plugins: [
            new WebpackBar({
                profile: true
            }),
        ],
    }
}