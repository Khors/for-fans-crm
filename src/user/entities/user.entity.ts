import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
    Unique
} from 'sequelize-typescript';

@Table
export class User extends Model {


    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER.UNSIGNED)
    id!: number;

    @Unique
    @Column
    email: string;

    @AllowNull(true)
    @Column
    firstName!: string;

    @AllowNull(true)
    @Column
    lasName!: string;
}
