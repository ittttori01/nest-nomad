import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    //database part
    private movies : Movie[] = [];

    getAll() : Movie[] {
        return this.movies;
    }

    getOne(id:number) : Movie  {
        //찾고싶은 영화가없으면 에러내보내기
        const movie = this.movies.find(movie => movie.id === id);
        
        if(!movie){
            throw new NotFoundException(`${id} moview NOT FOUNDED`);
        }

        return movie;
    }

    deleteMovie(id: number){

        //없는 영화 찾으면 똑같이 에러처리
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    createMovie(movieData: CreateMovieDto){
       
        this.movies.push({
            id : this.movies.length +1,
            ...movieData
        })

        return this.movies
    }

    updateMovie(id:number,updateData: UpdateMovieDto){
        
        const movie = this.getOne(id);
        this.deleteMovie(id);
        this.movies.push({ ...movie, ...updateData });
  
        return movie
    }
}
