import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Sequelize,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';  
  
  @Table
  export class UserCheckin extends Model<UserCheckin> {
    
    @PrimaryKey
    @Column({type:DataType.UUID, allowNull: false, defaultValue: Sequelize.literal('uuid_generate_v4()')})
    public id!: string;
  
    @Column({ type: DataType.UUID, allowNull: false })
    public userId!: string;

    @CreatedAt
    created!: Date;

    @UpdatedAt
    updated!: Date;

  }