import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux';
import { loadFeatureDummyObjects } from './dummyFeatureDummyObjectsSlice';
import { Card, GridList, Grid, Typography } from '@material-ui/core';
import BookCard from '../../components/BookCard';


/** View component without connection to store (use this directly in tests and storybook)
 *  
 * */
function DummyFeatureMainPagePure({ items, isLoading }) {
    console.log('featureDummyObjects loaded? ', items);
    console.log('is loading? ', isLoading);

    return (
        <>
            <div style={{ backgroundColor: "green", padding: "2em" }}>

                <Typography variant="h2">
                    this is your 'feature'.. now go and Do something with the 'items' in your 'future' 😉
                </Typography>
                <Typography variant="subtitle2">
                    A simple material ui Grid listing cards with flexbox style (using a GridList might be better, but css-grid is probably best)
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    {items.map((book, index) => {
                        return (
                            <Grid item key={index}>
                                <BookCard bookItem={book} />
                            </Grid>
                        )
                    })}
                </Grid>

            </div>
        </>
    );

}

DummyFeatureMainPagePure.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }))
}


/**
 * responsible for loading data - use only when not combining with other components for filtering data
 * creating the map using 'DummyFeatureMainPagePure'
 */
function DummyFeatureMainPage() {

    const dispatch = useDispatch();
    /** IMPORTANT -  
     * state.featureDummyObjects , refers to 'reduxStore.featureDummyObjects' 
     * and 'featureDummyObjects' is the reducer in src/storeRedux/rootReducer.js  (exported from dummyFeatureDummyObjectsSlice.js)
     * (haven't looked at how intelisense can be fixed to support this)
     * */
    const featureDummyObjects = useSelector((state) => state.featureDummyObjects.featureDummyObjectsAll)
    const isLoadingDummyObjects = useSelector((state) => state.featureDummyObjects.isLoading)

    useEffect(() => {

        dispatch(loadFeatureDummyObjects());
        /** cleaning up on 'unmount', i.e. when the user navigates away from the component/page */
        // return () => {
        //     cleanup
        // }
    }, [dispatch])

    useEffect(() => {
        console.log("featureDummyObjects loaded: ", featureDummyObjects);
    }, [featureDummyObjects])

    return (
        <DummyFeatureMainPagePure items={featureDummyObjects} isLoading={isLoadingDummyObjects} />
    )
}

export {
    DummyFeatureMainPagePure
};
export default DummyFeatureMainPage;
