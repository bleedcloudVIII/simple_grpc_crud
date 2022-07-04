import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: [
        'products'
      ],
      protoPath: [
        join(__dirname, '../src/products/proto/products.proto')
      ]
    }
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
