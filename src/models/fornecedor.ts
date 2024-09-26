import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Fornecedor extends Model {
  public id!: number;
  public nome!: string;
}

Fornecedor.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Fornecedor',
    tableName: 'fornecedores',
  }
);

export default Fornecedor;
