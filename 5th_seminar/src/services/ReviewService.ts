import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewResponseDto } from "../interfaces/review/ReviewResponseDto";
import { ReviewUpdateDto } from "../interfaces/review/ReviewUpdateDto";
import Review from "../models/Review";

const createReview = async (movieId: string, reviewCreateDto: ReviewCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const review = new Review({
            title: reviewCreateDto.title,
            content: reviewCreateDto.content,
            writer: reviewCreateDto.writer,
            movie: movieId,
        });

        await review.save();

        const data = {
            _id: review._id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateReview = async (reviewId: string, reviewUpdateDto: ReviewUpdateDto): Promise<ReviewResponseDto | null> => {
    
    try {
        const review = await Review.findByIdAndUpdate(reviewId, reviewUpdateDto)
        .populate('writer', 'name').populate('movie');
        if (!review) {
            return null;
        }
        const data: any = {
            writer: review.writer,
            movie: review.movie,
            title: review.title,
            content: review.content
        }
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getReviews = async (movieId: string): Promise<ReviewResponseDto[] | null> => {
    try {
         const reviews = await Review.find({
             movie: movieId
         }).populate('writer', 'name').populate('movie');
         if (reviews.length === 0) {
            return null;
        }

         const data = await Promise.all(reviews.map((review: any) => {           
             const result = {
                writer: review.writer.name,
                movie: review.movie,
                title: review.title,
                content: review.content
             };

             return result;
         }));

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteReview = async (reviewId: string): Promise<ReviewResponseDto | null> => {
    
    try {
        const review = await Review.findByIdAndDelete(reviewId)
        .populate('writer', 'name').populate('movie');
        if (!review) {
            return null;
        }
        const data: any = {
            writer: review.writer,
            movie: review.movie,
            title: review.title,
            content: review.content
        }
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createReview,
    updateReview,
    getReviews,
    deleteReview,
}
