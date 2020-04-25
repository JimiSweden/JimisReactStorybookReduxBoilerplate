/**
 * config will be deprecated.. as will this folder. in version 6.0
 * Config V2: storybook.config.js
 * https://github.com/storybookjs/storybook/issues/6806 >>
 * deprecations:
        ./storybook dir
        custom webpack.config.js
        custom babelrc
        addons.js
        config.js
        parts of the @storybook/app api, like a configure method, that is used in config.js
 *
 * Stories are loaded in the .storybook/main.js file
 * see Readme for examples and links
 * */

//you need to import the site/app css here to use it in storybook 
//(as it does not load the "index/app" state)
//todo: where is this done in the new version 6?
// import '../src/index.css';
// import 'semantic-ui-css/semantic.css'

/*
also remember the font and icon directories from https://github.com/chromaui/learnstorybook-code/tree/master/public
copy to the public folder.
*/