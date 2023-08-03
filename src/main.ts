import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from './pipe/validation.pipe';

const start = async() => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3030;
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("Cheap Fuel Project")
      .setDescription("API")
      .setVersion("1.0.0")
      .addTag('NestJS, Postgres, Sequelize')
      .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => {
      console.log(`Server has started on ${PORT}-port!`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();