import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    home(){
        return "Welcom to my movie API With cloud build Service";
    }
}
