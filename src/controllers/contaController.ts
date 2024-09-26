import { Request, Response } from 'express';
import Conta from '../models/conta';

const contaController = {
  getAllContas: async (req: Request, res: Response) => {
    try {
      const contas = await Conta.findAll();
      res.status(200).json(contas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar suas contas' });
    }
  },

  getContaById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const conta = await Conta.findByPk(id);
      if (!conta) {
        return res.status(404).json({ error: 'A Conta não encontrada' });
      }
      res.status(200).json(conta);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar sua conta' });
    }
  },

  createConta: async (req: Request, res: Response) => {
    try {
      const { fornecedor, tipoPagamento, meioPagamento, dataVencimento, valor } = req.body;
      const novaConta = await Conta.create({
        fornecedor,
        tipoPagamento,
        meioPagamento,
        dataVencimento,
        valor,
      });
      res.status(201).json(novaConta);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar sua conta' });
    }
  },

  updateConta: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { fornecedor, tipoPagamento, meioPagamento, dataVencimento, valor } = req.body;
      const conta = await Conta.findByPk(id);
      if (!conta) {
        return res.status(404).json({ error: 'Ops! Conta não encontrada' });
      }

      await conta.update({
        fornecedor,
        tipoPagamento,
        meioPagamento,
        dataVencimento,
        valor,
      });

      res.status(200).json(conta);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar sua conta' });
    }
  },

  deleteConta: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const conta = await Conta.findByPk(id);
      if (!conta) {
        return res.status(404).json({ error: 'Conta não encontrada' });
      }

      await conta.destroy();
      res.status(204).json({ message: 'Conta deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar conta' });
    }
  },
};

export default contaController;
