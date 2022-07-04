import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CreateProductAtts {
    name: string;
    cost: number;
}

@Table({ createdAt: false, updatedAt: false, tableName: 'products'})
export class Product extends Model<Product, CreateProductAtts>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    cost: number;

    @Column({type: DataType.STRING, allowNull: false})
    category: string;
}