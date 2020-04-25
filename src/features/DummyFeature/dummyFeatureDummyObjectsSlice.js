import { createSlice } from "@reduxjs/toolkit";
import { getMyDummyObjects } from "../../api/myDummyObjectsApi";
import { arrayToObjectWithIdsAsProp } from '../../utils/arrayUtils'

const featureDummyObjectsSlice = createSlice({
    name: "featureDummyObjects",
    initialState: {
        featureDummyObjectsAll: [], //this can be removed later when "by id" is implemented
        featureDummyObjectsById: {}, //object with the id as prop for fast "query"
        error: null,
        isLoading: false
    },

    /**
     * Note: A mapping from action types to action-type-specific case reducer functions. 
     * For every action type, a matching action creator will be generated using createAction().
     * this means, the reducer loadFeatureDummyObjectsSuccess will get a matching action named loadFeatureDummyObjectsSuccess, available on featureDummyObjectsSlice.actions
     * - this action is later dispatched from 'outside', i.e the loadFeatureDummyObjects thunk (in this case), 
     * - the action is matched with the reducer of the same name 'loadFeatureDummyObjectsSuccess'
     */
    reducers: {
        //loadFeatureDummyObjects
        loadFeatureDummyObjectsStart(state) {
            state.isLoading = true;
        },
        loadFeatureDummyObjectsSuccess(state, action) {
            //action always gets the payload populated with what is dispatched, 
            state.featureDummyObjectsAll = action.payload;
            state.featureDummyObjectsById = arrayToObjectWithIdsAsProp(action.payload, 'id')
            state.isLoading = false;
            state.error = null;
        },
        loadFeatureDummyObjectsFailed(state, action) {
            state.error = action.payload
            state.isLoading = false;
            //perhaps logging?
        }

        //createDummyObject
        //upateDummyObject
        //deleteDummyObject
    }
});

export const {
    loadFeatureDummyObjectsSuccess,
    loadFeatureDummyObjectsFailed,
    loadFeatureDummyObjectsStart
} = featureDummyObjectsSlice.actions;

export default featureDummyObjectsSlice.reducer;


/**
 * loadFeatureDummyObjects - fetch all featureDummyObjects from api
 * @example
 * dispatch(loadFeatureDummyObjects())
 * 
 * loadFeatureDummyObjects is a Thunk, depending on the redux-thunk middleware, added by default when using configureStore from @redux/toolkit
 * the thunk enables the use of async functions in redux.
 */
export const loadFeatureDummyObjects = () => async dispatch => {
    try {
        dispatch(loadFeatureDummyObjectsStart);
        const featureDummyObjects = await getMyDummyObjects();

        /** transform data before adding to store */
        /** 
         * NOTE that the loadFeatureDummyObjectsSuccess here is an actionCreator taking a payload, 
         *  it is NOT the same as the reducer loadFeatureDummyObjectsSuccess above in the createSlice.reducers
         * - this is perhaps confusing, but use the intellisense to see what loadFeatureDummyObjectsSuccess takes as parameters
        */
        dispatch(loadFeatureDummyObjectsSuccess(featureDummyObjects));

    } catch (error) {
        debugger;
        dispatch(loadFeatureDummyObjectsFailed(error));
    }
};


