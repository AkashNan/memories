// What are reducers
// Well a reducers is a function that accepts a state and also an action.
// then based on action type, we want to do some logic or return action or state changed by action.

// state always need to be equal to something so lets set state to an array since 
// our state is going to be an array always in this case as we are in posts reducer 
// so we can simple do posts []

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE }  from '../constants/actionTypes';

const reducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:  
            return [...posts, action.payload];  
        case UPDATE:
        case LIKE  :
            return posts.map((post) => post._id === action.payload._id ? action.payload : post )
        case DELETE:  
            return posts.filter((post) => post._id !== action.payload );
        default:
            return posts;
    }
}

export default reducer;