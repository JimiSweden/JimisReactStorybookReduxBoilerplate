# notes on javascript documentation with JSDoc
- standard for ducumenting tool for javascript 
- supported by default by visual studio code
- can be used to create documentation (export html) using f ex 'better-docs'

https://jsdoc.app/

## Example for react with better-docs and @component.
https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/

### better-docs
better-docs is a theme for JSDocs that provides a custom @component plugin. 
It parses our PropTypes and generates the documentation(with Live Preview) from our React Components. 
https://github.com/SoftwareBrothers/better-docs 

> note on the configuration
```json
"opts": {
        //output folder of the generated documents 
        "destination": "docs",
        "recurse": true,
        //this readme, should be the one in the project - the content is put inside the index file of destination folder
        "readme": "README.md"

```

# vs code tips 
Markdown preview: https://code.visualstudio.com/docs/languages/markdown#_markdown-preview

# Environment (working with this code)
(update this when confirmed working environment upgrades are in place)
```
VS code (1.40.1, probably not not as critical as node and yarn versions)
Yarn 1.19.2
nodejs 13.3.0 (13.3.0 had issues with jest test run)
```

# Hot reloading 
(Note, :warning: https://github.com/gaearon/react-hot-loader/issues/1088 )
React Hooks Incompatibility with react-hot-loader

https://github.com/cdharris/react-app-rewire-hot-loader


## 1 
In the config-overrides.js of the root of your project you created for react-app-rewired add this code:
```jsx
const rewireReactHotLoader = require('react-app-rewire-hot-loader')


/* config-overrides.js */
module.exports = function override (config, env) {
  config = rewireReactHotLoader(config, env)
  return config
}
```
## 2
Follow 'step 2' from https://github.com/gaearon/react-hot-loader , replicated below:
Mark your root component as hot-exported:
```jsx
// App.js - react-hot-loader >= 4.5.4
import React from 'react'
import { hot } from 'react-hot-loader/root'

const App = () => <div>Hello World!</div>

export default process.env.NODE_ENV === "development" ? hot(App) : App
```

# TODO - to try out

## StoryShots + Puppeteer
https://github.com/storybookjs/storybook/tree/next/addons/storyshots/storyshots-puppeteer
Try it out later

### Puppeteer
Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.
https://github.com/puppeteer/puppeteer

Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:

Generate screenshots and PDFs of pages.
Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
Automate form submission, UI testing, keyboard input, etc.
Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
Capture a timeline trace of your site to help diagnose performance issues.
Test Chrome Extensions.


## fix relative paths
https://medium.com/@leonardobrunolima/react-tips-working-with-relative-path-using-create-react-app-fe55c5f97a21

## Read and use
story-hierarchy 
Example : title: 'Design System/Atoms/Checkbox' and title: 'Design System/Atoms/Button' creates menu with sublevels
https://github.com/storybookjs/storybook/blob/next/docs/src/pages/basics/writing-stories/index.md#story-hierarchy

Generating nesting path based on __dirname
https://github.com/storybookjs/storybook/blob/next/docs/src/pages/basics/writing-stories/index.md#generating-nesting-path-based-on-__dirname

# Storybook example

```jsx
import React from 'react'

import mockData from '../../../tools/mockDataNavigator';
import { MapMainPagePure } from './MapMainPage';

const wrapperWithPadding = story => <div style={{ padding: "3em" }}>{story()}</div>;

export default {
    title: 'Navigator/MapMainPage',
    components: MapMainPagePure,
    decorators: [wrapperWithPadding]
}

export const Default = () => <MapMainPagePure navigatorRegionsNested={mockData.navigatorRegionsNested} />
```

# CSS

if using css files included in html you need to import the site/app css to use it in storybook (as it does not load the "index/app" state)
 > note: not true for material-ui, as the imports will break material ui css
```jsx
import '../src/index.css';? 
//todo: where is this done in the new style (sb 6.0) when config.js will be depricated?
```

## 'clsx' makes it easy to combine classes and write conditional classes.
https://www.npmjs.com/package/clsx



# Addons
## Actions
https://www.npmjs.com/package/@storybook/addon-actions
Storybook Addon Actions can be used to display data received by event handlers in Storybook
f ex if you have a click event on a button, checkbox etc and want this to be reflected in storybook when you click it, . Or you might have some handler that should trigger depending on recieved data from a redux store; and you want to display this.

## Docs
https://github.com/storybookjs/storybook/tree/master/addons/docs#framework-support
Docs has peer dependencies on react and babel-loader. If you want to write stories in MDX, you may need to add these dependencies as well: yarn add -D react babel-loader

### Disabling docs stories
https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md#disabling-docs-stories

There are two cases where a user might wish to exclude stories from their documentation pages:

DocsPage
User defines stories in CSF and renders docs using DocsPage, but wishes to exclude some fo the stories from the DocsPage to reduce noise on the page.
```jsx
export const foo = () => <Button>foo</Button>;
foo.story = { parameters: { docs: { disable: true } } };
```

MDX Stories
User writes documentation & stories side-by-side in a single MDX file, and wants those stories to show up in the canvas but not in the docs themselves. They want something similar to the recipe "CSF stories with MDX docs" but want to do everything in MDX:
```md
<Story name="foo" parameters={{ docs: { disable: true }} >
  <Button>foo</Button>
</Story>
```

### DocssPage slots - for adding information to stories
 https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/docspage.md#docspage-slots

 DocsPage is organized into a series of "slots" including Title, Subtitle, Description, Props, and Story. Each of these slots pulls information from your project and formats it for the screen.

## Knobs
Storybook Addon Knobs allow you to edit props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook.

https://github.com/storybookjs/storybook/tree/next/addons/knobs

Note: when using a task like in a 'default' object like this (to be used inside stories as in Task.stories.js)
```jsx
export const task ={
  id: text('id:','1'),
  title: text('title:','Test Task'),
  state: text('state:','TASK_INBOX'),
  updatedAt: new Date(2018,0,1,9,0)
};
```
the knobs view will not update in the UI when you switch between the different stories.
to make it update (without refreshing the page) you can either:
- use the knobs function inside the story (it will always re render)
- or use a function like below to return the default object (it will always be evaluated and thus re render)
-- note: this might have performance impact (I don't know yet)

```jsx
export const task = () => ({
    id: text('id:','1'),
    title: text('title:','Test Task'),
    state: text('state:','TASK_INBOX'),
    updatedAt: new Date(2018,0,1,9,0)
});
```

This is the default task object without any knobs added
```jsx
export const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018,0,1,9,0)
};
``` 

## Links - Story Links Addon
The Storybook Links addon can be used to create links that navigate between stories in Storybook.
https://github.com/storybookjs/storybook/tree/next/addons/links

the linkTo function
https://github.com/storybookjs/storybook/tree/next/addons/links#getting-started
you can link an event in a component to any story in the Storybook.

```jsx
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'Button',
};

export const first = () => (
  <button onClick={linkTo('Button', 'second')}>Go to "Second"</button>
);
export const second = () => (
  <button onClick={linkTo('Button', 'first')}>Go to "First"</button>
);
```
First parameter is the story kind name (what you named with title).
Second (optional) parameter is the story name (what you named with exported name). If the second parameter is omitted, the link will point to the first story in the given kind.
You can also pass a function instead for any of above parameter. That function accepts arguments emitted by the event and it should return a string:

withLinks decorator
https://github.com/storybookjs/storybook/tree/next/addons/links#withlinks-decorator

also see LinkTo React component 
 https://github.com/storybookjs/storybook/tree/next/addons/links#linkto-component-react-only
 Not sure but i could probably be nice in mdx style stories.

## Story Shots
_(for unit tests see header Unit testing)_

https://github.com/storybookjs/storybook/tree/next/addons/storyshots
basic: https://github.com/storybookjs/storybook/tree/next/addons/storyshots/storyshots-core
Story shots is the implementation of jest snapshot tests, to be notified when UI changes affect the rendered output
See setup example here https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/

## storybook-addon-designs
A Storybook addon that embed Figma or websites in the addon panel for better design-development workflow. 
https://github.com/pocka/storybook-addon-designs
demo: https://pocka.github.io/storybook-addon-designs

# Stories
There are two basic levels of organization in Storybook: 
The component and its child stories. 
Think of each story as a permutation of a component. 
You can have as many stories per component as you need.
    Component
        Story
        Story
        Story
## Writing Stories
https://github.com/storybookjs/storybook/blob/next/docs/src/pages/basics/writing-stories/index.md#story-hierarchy

## important concepts of CSF format (Component Story Format)
stories can be included and exluded in the default export, to not export things we want to use in other stories but not want to be rendered as a story in the UI
```jsx
export default {
  title: 'MyComponent',
  components: MyComponent,
  includeStories: ['simpleStory', 'complexStory']
}
```
valid configurations of include and exclude: using suffixed names
```jsx
includeStories: ['simpleStory', 'complexStory']
includeStories: /.*Story$/
excludeStories: ['simpleData', 'complexData']
excludeStories: /.*Data$/
```

### story exports
https://github.com/storybookjs/storybook/blob/next/docs/src/pages/formats/component-story-format/index.md#story-exports

### non-story exports
https://github.com/storybookjs/storybook/blob/next/docs/src/pages/formats/component-story-format/index.md#non-story-exports

## Loading Stories - the new configure  
https://github.com/storybookjs/storybook/blob/next/docs/src/pages/basics/writing-stories/index.md#loading-stories

Stories are loaded in the .storybook/main.js file or .storybook/preview.js file.

The most convenient way to load stories is by filename. For example, if your stories files are located in the src/components directory, you can use the following snippet:
```jsx
// .storybook/main.js
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
};
``` 
Alternatively you can import all your stories in .storybook/preview.js:
```jsx
import { configure } from '@storybook/react';

configure(require.context('../src/components', true, /\.stories\.js$/), module);
```

# Testing 
## Unit testing
_(also see story shots for snapshot testing)_

How to get started: See header "Unit tests with Jest" in https://www.learnstorybook.com/intro-to-storybook/react/en/composite-component/

## Interaction testing
For the interaction testing, Enzyme is the best tool we can use. With that, we can simulate user inputs and see what they are doing.
https://storybook.js.org/docs/testing/interaction-testing/

Specs Addon
If you like to write your tests directly inside your stories, we also have an addon called specs.
With that, you can write test specs directly inside stories. Additionally, you also can use your CI server to run those tests.
(WARNING: not maintained at the moment)
https://github.com/mthuret/storybook-addon-specifications

## Regression test tool
### Chromatic
https://www.learnstorybook.com/intro-to-storybook/react/en/test/
also read https://www.npmjs.com/package/storybook-chromatic#usage


```
yarn add storybook-chromatic
```

```json
//.package.json / scripts
"scripts": { "chromatic": "chromatic" }
```

```js
// .env file (in root)
CHROMATIC_APP_CODE=zd639pg0am
```


# Decorators
https://github.com/storybookjs/storybook/blob/next/docs/src/pages/basics/writing-stories/index.md#decorators
A decorator is a way to wrap a story with a common set of components, for example if you want to wrap a story in some formatting, or provide some context to the story.

Decorators can be applied globally, at the component level, or individually at the story level. Global decorators are typically applied in the Storybook config files, and component/story decorators are applied in the story file.


# CSS Modules
https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
Using the [name].module.css file naming convention. 
CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format [filename]\_[classname]\_\_[hash].

Tip: Should you want to preprocess a stylesheet with Sass (... read more in link)

CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. 
Learn more about CSS Modules here. https://css-tricks.com/css-modules-part-1-need/ 

# PropTypes
Full explanations and sample code
https://reactjs.org/docs/typechecking-with-proptypes.html

## Extension for Intellisense on PropTypes in VS code 
(works good together with JSDoc comments on the proptypes)
https://marketplace.visualstudio.com/items?itemName=OfHumanBondage.react-proptypes-intellisense


![below info is from this blog post](https://blog.bitsrc.io/understanding-react-proptypes-type-checking-in-react-9648a62ce12e)


## PropTypes: React elements Validation
We can specify that anything renderable by React should be sent: PropTypes.node
OR an React element shoud be passed: PropTypes.element.

## _PropTypes: instance validation_
_We can validate the instance of the prop. Here, we specify that the prop must be an instance of a particular class._

## PropTypes: Specific values validation
We can speciffy that our props must be some specific values. That's it must either be this or that or any of these values in a collection.
You can ensure that your prop is limited to specific values by treating it as an enum.

```jsx
function TypeComp(props) {
    return <div></div>
}
TypeCompo.defaultProps = {    
}

TypeComp.propsType = {
    typeProps: PropTypes.oneOf(['News', 'Photos'])
}
```

## PropsTypes: Multiple validation
We can specify that our prop could be of any types that are given.
An object that could be one of many types

```jsx
function TypeComp(props) {
    return <div></div>
}
TypeCompo.defaultProps = {
    optProp: " " || 0 || new Model()    
}

TypeComp.propsType = {
    optProp: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Model)
    ])
}
```


## PropTypes: Pass anything
We can specify to accept prop of any type, just anything be it number, string, symbol etc.
```jsx
PropTypes.any.isRequired
````

## PropTypes: Custom validation
We can even specify our own prop validation function.
```jsx
function TypeComp(props) {
    return <div></div>
}

TypeCompo.defaultProps = {
    
}

TypeComp.propsType = {
    customProp: function(props,propName,component) {
        if(!regex.test(props[propName])){
            return new Error(`Invalid prop passed to ${component}`)
        }
    }
}
```

# Redux
## important to remember when adding new data
importing the slice in combineReducers inside the rootReducer
> see: '\src\api\README.md' for details
> see: '\tools\README.md' for needed updates to the mockData