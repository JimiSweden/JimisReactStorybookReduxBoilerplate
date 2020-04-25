/**
 * perhaps this shold live in the store.js ?
 */
import { combineReducers } from 'redux';

//import slice reducers.. 
import dummyFeatureDummyObjectsReducer from '../features/DummyFeature/dummyFeatureDummyObjectsSlice.js';
// ... 

// export the reducers
export default combineReducers({
    //...
    featureDummyObjects: dummyFeatureDummyObjectsReducer,
    //...
})