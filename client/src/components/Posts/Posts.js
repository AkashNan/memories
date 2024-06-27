import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

// To fetch the data from global redux store we use useSelector hook from 'react-redux'. We call it as selectors
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(`Posts reading from store`);
    console.log(posts);

    return (   
            !posts.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} /> {/* setCurrrentId is we call props drilling in react; can be solved by useContext hook or redux for state managememnt */}                            
                        </Grid>
                    ))};
                </Grid>
            )
    )
}

export default Posts;