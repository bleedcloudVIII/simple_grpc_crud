import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { SequelizeModule } from "@nestjs/sequelize";
import { join } from "path";
import { ProductsController } from "./products.controller";
import { Product } from "./products.model";
import { ProdcutsService } from "./products.service";


@Module({
    controllers: [ProductsController],
    providers: [ProdcutsService],
    imports: [
        SequelizeModule.forFeature([Product]),
        ClientsModule.register([{
            name: 'Product_Package',
            transport: Transport.GRPC,
            options: {
                package: 'products',
                protoPath: join(__dirname, '../../src/products/proto/products.proto')
            }
        }])
    ]
})
export class ProductsModule{}