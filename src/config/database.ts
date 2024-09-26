import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('projetoapp', 'root', '20281422', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
