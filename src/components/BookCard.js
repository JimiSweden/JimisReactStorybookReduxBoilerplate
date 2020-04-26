import React from 'react';
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        maxWidth: 300,
        // minHeight: 300,
        // maxHeight: 300,
    },
    preTitle: {
        fontSize: 14,
    },
    author: {
        marginBottom: 12,
    },
});

/** About Links : 
* If a link doesn't have a meaningful href, it should be rendered using a <button> element component="button"
* When you use target="_blank" with Links, it is recommended to always set rel="noopener" or rel="noreferrer" when linking to third party content.
* rel="noopener" prevents the new page from being able to 
* access the window.opener property and ensures it runs in a separate process. 
* Without this, the target page can potentially redirect your page to a malicious URL.
* rel="noreferrer" has the same effect, but also prevents the Referer header from being sent to the new page. 
* ⚠️ Removing the referrer header will affect analytics. 
* */
/* <Button
size="small"                    
href={bookItem.url}
target="_blank"
rel="noopener"
>
purchase from affiliate link</Button> 
*/


function BookCard({ bookItem }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.preTitle} color="textSecondary" gutterBottom>
                    A book I have
{bookItem.type == "audiobook" && " listened to"}
                    {bookItem.type == "book" && " read"}.

</Typography>
                <Typography variant="h5" component="h2">
                    {bookItem.name}
                </Typography>
                <Typography className={classes.author} color="textSecondary">
                    {bookItem.author}
                </Typography>
                <Typography variant="body2" component="p">
                    {bookItem.rating}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    // component="button"
                    variant="button"
                    href={bookItem.url}
                    target="_blank"
                    rel="noopener"
                > purchase from affiliate</Link>
            </CardActions>
        </Card>
    );
}

BookCard.propTypes = {
    bookItem: PropTypes.shape({
        author: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        favorite: PropTypes.bool,
        rating: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
}


export default BookCard;