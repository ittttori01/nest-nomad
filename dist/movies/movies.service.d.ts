import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteMovie(id: number): void;
    createMovie(movieData: CreateMovieDto): Movie[];
    updateMovie(id: number, updateData: UpdateMovieDto): Movie;
}
