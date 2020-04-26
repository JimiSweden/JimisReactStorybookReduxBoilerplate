import React from 'react'

import BookCard from './BookCard';


//this is the same mock data that is also served with the local json-server
import mockData from "../_mock_data_and_api/mockData";
const bookItem = mockData.myDummyObjects[0];


const wrapperWithPadding = story => <div style={{ padding: "3em" }}>{story()}</div>;

export default {
    title: 'Components/BookCard',
    components: BookCard,
    decorators: [wrapperWithPadding]
}

export const Default = () =>
    <BookCard bookItem={bookItem} />
