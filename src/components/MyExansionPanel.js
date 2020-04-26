
import React from 'react';
import PropTypes from 'prop-types'

import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography
} from '@material-ui/core';
//clsx makes it easy to combine classes , and also make classes conditional.
import clsx from 'clsx';

import {
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

/**
 * expansion panel with predefined styling of header and subheader text
 */
function MyExpansionPanel({ header, subHeader, children }) {
    return (
        <>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                // aria-controls="additional-actions1-content"
                >
                    <Typography color="textPrimary" variant="h6" >
                        {header}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                        &nbsp; {subHeader}
                    </Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </>
    )
}

MyExpansionPanel.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired
}

// MyExpansionPanel.propTypes = {

// }
export default MyExpansionPanel;