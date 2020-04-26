
import React from 'react';
import PropTypes from 'prop-types';

import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core';

//clsx makes it easy to combine classes , and also make classes conditional.
// import clsx from 'clsx';

import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';



const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        flexGrow: 1,
    },
    title: {
        flexGrow: 1, //to make the buttons move to right
    },
    button: {
        margin: theme.spacing(1),
    }
}));

/**
 * AppBar for editing an object 
 * with predefined style for Save, Cancel and Delete buttons
 * 
 */
function MyAppBarForEditing({ objectBeingEdited }) {
    const classes = useStyles();
    return (
        <>
            <AppBar position="sticky">
                {/* // Toolbar */}
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}

                    <Typography variant="h6" variant="subtitle2">
                        you are editing the {objectBeingEdited.type} &nbsp;
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        "{objectBeingEdited.name}"
                    </Typography>

                    <IconButton aria-label="save" className={classes.button}>
                        <SaveIcon />
                    </IconButton>
                    <IconButton aria-label="cancel" className={classes.button}>
                        <CancelIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.button}>
                        <DeleteIcon />
                    </IconButton>
                    {/* example of disabled with style  */}
                    {/* <IconButton aria-label="delete" disabled color="primary">
                        <DeleteIcon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </>
    )
}


MyAppBarForEditing.propTypes = {
    objectBeingEdited: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })

}

export default MyAppBarForEditing;