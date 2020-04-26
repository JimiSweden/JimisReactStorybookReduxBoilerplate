import React from 'react'
import { Typography } from '@material-ui/core';

import MyExansionPanel from './MyExansionPanel';


const wrapperWithPadding = story => <div style={{ padding: "3em" }}>{story()}</div>;

export default {
    title: 'Components/MyExansionPanel',
    components: MyExansionPanel,
    decorators: [wrapperWithPadding]
}

export const Default = () =>
    <MyExansionPanel header="My header text" subHeader="some extra information">
        <Typography>
            some content for display inside my panel
        </Typography>
    </MyExansionPanel>
