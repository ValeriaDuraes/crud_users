const pool = require('../config/db');

exports.getAllUsers = async () => {
  try {
    const query =  await pool.query ('SELECT * FROM users');
    return query.rows;
  } catch (error) { 
    console.log(`Não foi possível acessar ao banco!`);
    throw new Error(error);
  }  
}

exports.createUser = async ({name, email,phone,address,birth_date}) => {
  try {
    const query = await pool.query('INSERT INTO users (name, email, phone, address, birth_date) values ($1, $2, $3, $4, $5) RETURNING *', [name, email,phone,address,birth_date]);
    return query.rows[0];  
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.updateUser = async (id, {name, email,phone,address,birth_date}) => {
  try {
    const query = await pool.query('UPDATE users SET name = $1, email = $2, phone = $3, address = $4, birth_date = $5 WHERE id = $6 RETURNING *', [name, email,phone,address,birth_date, id]);
    return query.rows[0];
  } catch (error) {
    console.log('Model: Não foi possível atualizar os dados do usuários!', error);
    throw new Error(error);
  }
};

exports.deleteUser = async (id) => {
  try {
    const query = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return query.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

