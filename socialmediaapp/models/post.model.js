const mongoose =require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    discription: String,
    media: [],
    creater: {
        typpe: mongoose.Types.objectId,
        ref: 'users',
        required: True
    }
    
})
module.exports = mongoose.model('posts', postSchema)