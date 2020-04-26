import React from 'react'

import { DummyFeatureMainPagePure } from './DummyFeatureMainPage';


//this is the same mock data that is also served with the local json-server
import mockData from "../../_mock_data_and_api/mockData";

const wrapperWithPadding = story => <div style={{ padding: "3em" }}>{story()}</div>;

export default {
    title: 'Features/DummyFeatureMainPage',
    components: DummyFeatureMainPagePure,
    decorators: [wrapperWithPadding]
}


export const Default = () =>
    <DummyFeatureMainPagePure items={mockData.myDummyObjects} />
