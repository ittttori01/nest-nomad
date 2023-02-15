import { Controller, Delete, Get, Param, Post, Patch, Put, Body, Query} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';


@Controller('movies')
export class MoviesController { 

  constructor(private readonly moviesService : MoviesService){};

    @Get()
    getAll(){
        return this.moviesService.getAll()

    }

    //'movies/search'를  /:id랑 똑같이 생각함 그러니까 search 명시를 ':/id' 위에다 해야함
    @Get('search')
    searchMovie(@Query('keyword') keyword : string){
        return `you typed ${keyword} a`
    }

    @Get("/:id")
    getOne(@Param('id') movieId :number){
       return this.moviesService.getOne(movieId);

    }

    //받아야하는 타입이 DTO
    @Post()
    createMovie(@Body() movieData: CreateMovieDto){
        return this.moviesService.createMovie(movieData);
    }
 
    @Delete(':id') 
    deleteMovie(@Param('id') movieId: number ){
        return this.moviesService.deleteMovie(movieId);
    }

    @Patch('/:id')
    updateMovie(@Param('id') movieid : number, @Body() updateData: UpdateMovieDto){
        
        return this.moviesService.updateMovie(movieid,updateData);
    }

}
