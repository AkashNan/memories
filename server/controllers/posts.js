import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts =  async (req, res) => {
    
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

    // res.send("API is working from controller!");
}

export const createPost = async (req, res) => {
    // res.send('Post Creation!');
    // https://www.restapitutorial.com/httpstatuscodes.html

    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// /post/123 - > 123 is going to fill the id

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req. body;

    //check if _id is really mongoose id: IF not return 404
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id'); 
    
    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id }, { new: true });

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Post to delete Not Found');

    await PostMessage.findByIdAndDelete(id);

    res.json({message: 'Post deleted successfully'});
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Post to delete Not Found');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true});

    res.json(updatedPost);
}