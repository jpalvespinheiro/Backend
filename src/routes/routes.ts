import { Router } from 'express';
import contaController from '../controllers/contaController';
import fornecedorController from '../controllers/fornecedorController';

const router: Router = Router();
/**
 * @swagger
 * /contas:
 *   get:
 *     summary: Retorna todas as contas
 *     responses:
 *       200:
 *         description: Lista de contas retornada com sucesso.
 *       500:
 *         description: Erro ao buscar as contas.
 */
router.get('/contas', contaController.getAllContas);

/**
 * @swagger
 * /contas/{id}:
 *   get:
 *     summary: Retorna uma conta específica pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da conta a ser retornada
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Conta retornada com sucesso.
 *       404:
 *         description: Conta não encontrada.
 *       500:
 *         description: Erro ao buscar a conta.
 */
router.get('/contas/:id', contaController.getContaById);

/**
 * @swagger
 * /contas:
 *   post:
 *     summary: Cria uma nova conta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fornecedor:
 *                 type: string
 *               tipoPagamento:
 *                 type: string
 *               meioPagamento:
 *                 type: string
 *               dataVencimento:
 *                 type: string
 *                 format: date
 *               valor:
 *                 type: number
 *     responses:
 *       201:
 *         description: Conta criada com sucesso.
 *       500:
 *         description: Erro ao criar a conta.
 */
router.post('/contas', contaController.createConta);

/**
 * @swagger
 * /contas/{id}:
 *   put:
 *     summary: Atualiza uma conta existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da conta a ser atualizada
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fornecedor:
 *                 type: string
 *               tipoPagamento:
 *                 type: string
 *               meioPagamento:
 *                 type: string
 *               dataVencimento:
 *                 type: string
 *                 format: date
 *               valor:
 *                 type: number
 *     responses:
 *       200:
 *         description: Conta atualizada com sucesso.
 *       404:
 *         description: Conta não encontrada.
 *       500:
 *         description: Erro ao atualizar a conta.
 */
router.put('/contas/:id', contaController.updateConta);

/**
 * @swagger
 * /contas/{id}:
 *   delete:
 *     summary: Deleta uma conta existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da conta a ser deletada
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Conta deletada com sucesso.
 *       404:
 *         description: Conta não encontrada.
 *       500:
 *         description: Erro ao deletar a conta.
 */
router.delete('/contas/:id', contaController.deleteConta);

// Rotas para Fornecedores
/**
 * @swagger
 * /fornecedores:
 *   post:
 *     summary: Cria um novo fornecedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Fornecedor criado com sucesso.
 *       500:
 *         description: Erro ao criar fornecedor.
 */
router.post('/fornecedores', fornecedorController.createFornecedor);

/**
 * @swagger
 * /fornecedores:
 *   get:
 *     summary: Retorna todos os fornecedores
 *     responses:
 *       200:
 *         description: Lista de fornecedores retornada com sucesso.
 *       500:
 *         description: Erro ao buscar fornecedores.
 */
router.get('/fornecedores', fornecedorController.getAllFornecedores);

/**
 * @swagger
 * /fornecedores/{id}:
 *   put:
 *     summary: Atualiza um fornecedor existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do fornecedor a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fornecedor atualizado com sucesso.
 *       404:
 *         description: Fornecedor não encontrado.
 *       500:
 *         description: Erro ao atualizar fornecedor.
 */
router.put('/fornecedores/:id', fornecedorController.updateFornecedor);

/**
 * @swagger
 * /fornecedores/{id}:
 *   delete:
 *     summary: Deleta um fornecedor existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do fornecedor a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Fornecedor deletado com sucesso.
 *       404:
 *         description: Fornecedor não encontrado.
 *       500:
 *         description: Erro ao deletar fornecedor.
 */
router.delete('/fornecedores/:id', fornecedorController.deleteFornecedor);

export default router;
