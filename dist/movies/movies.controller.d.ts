import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): import("./entities/movies.entity").Movie[];
    searchMovie(keyword: string): string;
    getOne(movieId: number): import("./entities/movies.entity").Movie;
    createMovie(movieData: CreateMovieDto): import("./entities/movies.entity").Movie[];
    deleteMovie(movieId: number): void;
    updateMovie(movieid: number, updateData: UpdateMovieDto): import("./entities/movies.entity").Movie;
}
