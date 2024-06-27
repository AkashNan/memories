import axios from 'axios';

const url = 'http://localhost:5000/posts';

// Now we need to add redux capability to our client side 
// because all actions towards our backend are going to be done using redux
// We need to dispatch those actions

// To do that we have to add some boilerplate code 
// meaning we have to create few files and folders
// but later on on bigger application this is going to be extremely great
// because of the scalability
// And I agree that to implement redux you have to add lot of files and folders
// but its gonna be great in long run as it makes our application scalable
// that means that as our application grows we are able to use same consistency redux offers us without any trouble.


export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)