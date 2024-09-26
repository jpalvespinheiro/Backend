import { Request, Response } from 'express';
import Fornecedor from '../models/fornecedor';

const fornecedorController = {
  createFornecedor: async (req: Request, res: Response) => {
    try {
      const { nome } = req.body;
      const novoFornecedor = await Fornecedor.create({ nome });
      res.status(201).json(novoFornecedor);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar fornecedor' });
    }
  },

  getAllFornecedores: async (req: Request, res: Response) => {
    try {
      const fornecedores = await Fornecedor.findAll();
      res.status(200).json(fornecedores);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar fornecedores' });
    }
  },

  updateFornecedor: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const fornecedor = await Fornecedor.findByPk(id);
      if (!fornecedor) {
        return res.status(404).json({ error: 'Fornecedor não encontrado' });
      }

      await fornecedor.update({ nome });
      res.status(200).json(fornecedor);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar fornecedor' });
    }
  },

  deleteFornecedor: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const fornecedor = await Fornecedor.findByPk(id);
      if (!fornecedor) {
        return res.status(404).json({ error: 'Fornecedor não encontrado' });
      }

      await fornecedor.destroy();
      res.status(204).json({ message: 'Fornecedor deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar fornecedor' });
    }
  },
};

export default fornecedorController;
