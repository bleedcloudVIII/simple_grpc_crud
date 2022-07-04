import { Controller, Inject, Param, Get } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Product } from "./products.model";
import { InjectModel } from "@nestjs/sequelize";
import { IProductsService } from "./products.app.proto";
import { get } from "http";

@Controller('/products/')
export class ProductsController{

    private productService: IProductsService;

    constructor(
        @Inject('Product_Package') private client: ClientGrpc,
        @InjectModel(Product) private readonly productsrespository: typeof Product
    ) {}

    onModuleInit() {
        this.productService = this.client.getService<IProductsService>('Products')
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        // return this.productService.FindOne({id});
    }


}