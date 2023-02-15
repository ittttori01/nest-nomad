import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';  
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist :true,
    forbidNonWhitelisted : true,
    //user들이 보내는 데이터를 바꿔주는것 id string으로 보내다가 number로선언해도됨
    transform : true,
      
  }));
  await app.listen(3000);
}
bootstrap();
