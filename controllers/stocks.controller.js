import query from '../db/utils';

const findAll = async () => {
  return query('SELECT * FROM stocks');
};

const findOne = async (stockId) => {
  return query('SELECT * FROM stocks WHERE stock_id = ?', stockId);
};

const addOne = async (newStockData) => {
  return query(`INSERT INTO stocks SET ?`, newStockData)
}

const updateOne = async (stockId, updatedData) => {
  return query(`UPDATE stocks SET ? WHERE stock_id = ?`, [updatedData, stockId]);
}

const removeOne = async (stockId) => {
  return query(`DELETE FROM stocks WHERE stock_id = ?`, stockId);
}

export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne
}