import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { PostCreateDto } from "../interfaces/post/PostCreateDto";
import { PostResponseDto } from "../interfaces/post/PostResponseDtd";
import { PostUpdateDto } from "../interfaces/post/PostUpdateDto";
import Post from "../models/Post";



const createPost = async (postCreateDto: PostCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const post = new Post({
            userId: postCreateDto.userId,
            title: postCreateDto.title,
            content: postCreateDto.content,
            additional: {
                category: postCreateDto.additional?.category,
                season: postCreateDto.additional?.season,
            }
        });
        await post.save();

        const data = {
            _id: post.id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updatePost = async (postId: string, postUpdateDto: PostUpdateDto): Promise<PostUpdateDto | null> => {
    try {
        await Post.findByIdAndUpdate(postId, postUpdateDto);
        const post = await findPostById(postId);
        if (!post) {
            return null;
        }
        return post;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findPostById = async (postId: string): Promise<PostResponseDto | null> => {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return null;
        }
        return post;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deletePost = async (postId: string): Promise<PostResponseDto | null> => {
    try {
        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
            return null;
        }
        return post;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default {
    createPost,
    updatePost,
    findPostById,
    deletePost,
}
