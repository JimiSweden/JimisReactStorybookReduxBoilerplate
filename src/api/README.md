# important  to remember when adding new Api and new Slices.
in 'rootReducer.js' (src/storeRedux/rootReducer.js'), import the reducer (default export) from the slice
> e.g
```jsx
// import dummyObjectsReducer from '../components/DummyObjects/dummyObjectsSlice';
import dummyFeatureDummyObjectsReducer from '../features/DummyFeature/dummyFeatureDummyObjectsSlice.js';

export default combineReducers({
    //...
    featureDummyObjects: dummyFeatureDummyObjectsReducer,
    //...
})
```