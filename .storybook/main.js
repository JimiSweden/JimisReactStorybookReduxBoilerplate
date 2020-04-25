const path = require('path');

module.exports = {
    //make sure both components and features are included
    stories: ["../src/components/**/*.stories.js", "../src/features/**/*.stories.js"],
    addons: [
        '@storybook/preset-create-react-app',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
        /**
         *  Addon registration order matters!
         * The order you list these addons will dictate the order 
         *  in which they appear as tabs on your addon panel (for those that appear there)
         */
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-links/register'
    ],
};