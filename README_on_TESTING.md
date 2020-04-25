# to look at.
- https://testing-library.com/docs/react-testing-library/intro 
- https://reactjs.org/docs/testing.html 

# unit tests
test script in package.json
```json
"test": "react-scripts test",
```
> run with "yarn test"

more info on tests * https://create-react-app.dev/docs/running-tests

## expect matchers documentation
https://jestjs.io/docs/en/expect.html#content

## snapshots with storybook
snapshot settings are configured here
> src\storybook.test.js

configs: 
https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core#storykindregex

storyKindRegex
If you'd like to only run a subset of the stories for your snapshot tests based on the story's kind:
```js
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^MyComponent$/
});
```
This can be useful if you want to separate the snapshots in directories next to each component. See an example here.

If you want to run all stories except stories of a specific kind, you can write an inverse regex which is true for all kinds except those with a specific word such as DontTest

```js
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex:/^((?!.*?DontTest).)*$/
});
```