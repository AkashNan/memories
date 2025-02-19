import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE }  from '../constants/actionTypes';
import * as api from '../api'

// Action creator
// are functions that return actions.
// and an action is just an object with type and payload

export const getPosts = () => async (dispatch) => {
    try {

        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data});

        //const actions = { type: 'FETCH_ALL', payload: [] }
        //dispatch(actions);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data});  // as soon as we dispatch (this is redux thunk dispatch) control goes to reducers) : lets dispatch this from Form.js using useDispatch hook from react-redux
        
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}