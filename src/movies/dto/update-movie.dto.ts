import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

//partial type original모델이 필요하다

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}