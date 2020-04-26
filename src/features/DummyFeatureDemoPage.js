import React from 'react';
import { Provider } from 'react-redux';

import store from '../storeRedux/store';

import DummyFeatureMainPage from './DummyFeature/DummyFeatureMainPage';



function DummyFeatureDemoPage() {
    return (
        <>
            <h3>
                This is just a demo page to show how to use the redux store with 'Provider'
            </h3>
            <h5>
                DummyFeatureMainPage depends on data from a redux store
            </h5>
            <h5>here we decide what redux store to 'Provide' our feature with</h5>

            <Provider store={store}>
                <DummyFeatureMainPage />
            </Provider>
        </>
    );
}

export default DummyFeatureDemoPage;