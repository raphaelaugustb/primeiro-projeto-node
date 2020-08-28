import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface ListTransactionDTO {
  transactions: Transaction[];
  balance: Balance;
}
class ListTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): ListTransactionDTO {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    const returnBalanceTransaction = {
      transactions,
      balance,
    };
    return returnBalanceTransaction;
  }
}

export default ListTransactionService;
