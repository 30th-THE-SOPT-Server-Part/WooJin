import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import { MovieResponseDto } from "../interfaces/movie/MovieResponseDto";
import { MovieUpdateDto } from "../interfaces/movie/MovieUpdateDto";
import Movie from "../models/Movie";

const createMovie = async (movieCreateDto: MovieCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const movie = new Movie({
            title: movieCreateDto.title,
            director: movieCreateDto.director,
            startDate: movieCreateDto.startDate,
            thumbnail: movieCreateDto.thumbnail,
            story: movieCreateDto.story,
        });

        await movie.save();

        return movie;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateMovie = async (movieId: string, movieUpdateDto: MovieUpdateDto): Promise<MovieResponseDto | null> => {
    try {
        const movie = await Movie.findByIdAndUpdate(movieId, movieUpdateDto);
        if (!movie) {
            return null;
        }

        return movie;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findMovieById = async (movieId: string): Promise<MovieResponseDto | null> => {
    try {
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return null;
        }

        return movie;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteMovie = async (movieId: string): Promise<MovieResponseDto | null> => {
    try {
        const movie = await Movie.findByIdAndDelete(movieId);
        if (!movie) {
            return null;
        }

        return movie;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createMovie,
    updateMovie,
    findMovieById,
    deleteMovie,
}
