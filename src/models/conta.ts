import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Conta extends Model {
  public id!: number;
  public fornecedor!: string;
  public tipoPagamento!: string;
  public meioPagamento!: string;
  public dataVencimento!: Date;
  public valor!: number;
}

Conta.init(
  {
    fornecedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoPagamento: {
      type: DataTypes.ENUM('Contas a Receber', 'Contas a Pagar'),
      allowNull: false,
    },
    meioPagamento: {
      type: DataTypes.ENUM('Pix', 'Cartão de Crédito', 'Boleto'),
      allowNull: false,
    },
    dataVencimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Conta',
    tableName: 'contas',
  }
);

export default Conta;
