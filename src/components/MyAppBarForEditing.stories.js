import React from 'react'

import MyAppBarForEditing from './MyAppBarForEditing';


//this is the same mock data that is also served with the local json-server
import mockData from "../_mock_data_and_api/mockData";
const objectBeingEdited = mockData.myDummyObjects[0];


const wrapperWithPadding = story => <div style={{ padding: "3em" }}>{story()}</div>;

export default {
    title: 'Components/MyAppBarForEditing',
    components: MyAppBarForEditing,
    decorators: [wrapperWithPadding]
}

export const Default = () =>
    <MyAppBarForEditing objectBeingEdited={objectBeingEdited} />
