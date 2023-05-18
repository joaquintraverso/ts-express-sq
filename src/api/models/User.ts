import sequelize from "../../database/connection";
import { DataTypes, Model, Optional } from "sequelize";

interface UserAttributes {
  id: number,
  name: string,
  lastName: string
}

//version op para no requerir atributos
export interface UserInput extends Optional<UserAttributes, 'name' | 'lastName'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number
  public name!: string
  public lastName!: string
} 

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize: sequelize,
    timestamps: false
  }
);

export default User;
