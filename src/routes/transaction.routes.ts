import { Router } from 'express';
import CreateTransactionService from '../services/CreateTransactionService';
import TransactionsRepository from '../repositories/TransactionsRepository';
import ListTransactionService from '../services/ListTransacitionService';

const transactionRouter = Router();
const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const ListTransaction = new ListTransactionService(transactionsRepository);
    const listBalanceandTransaction = ListTransaction.execute();
    return response.status(200).json(listBalanceandTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;
    const createTransactions = new CreateTransactionService(
      transactionsRepository,
    );
    const createTransaction = createTransactions.execute({
      title,
      value,
      type,
    });

    return response.json(createTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
