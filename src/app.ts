import express, { Application } from 'express';
import sequelize from './config/database';
import routes from './routes/routes';
import setupSwagger from './swagger';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', routes);


setupSwagger(app);

// Sincronização com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Conectado ao banco de dados e sincronizado!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados: ', error);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
