const usersModel = require('../model/Users');

exports.getAllUsersController = async(req, res) => {
  console.log('Controller: Recebendo requisições para obter usuários!');
  try {
    const users = await usersModel.getAllUsers();
    console.log(`Usuários obtidos com sucesso!`);
    res.status(200).json(users);
  } catch (err) {
    console.log(`Não foi possível encontrar os usuários!${err.message}`);
    res.status(500).json({ error: err.message });
  }
};

exports.createUserController = async (req, res) => {
  try {
    const {name, email,phone,address,birth_date} = req.body;
    const newUser = await usersModel.createUser({name, email,phone,address,birth_date});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ Error: error.message});
  }
};

exports.updateUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const {name, email, phone, address, birth_date} = req.body;
    const updatedUser = await usersModel.updateUser(userId, {name, email, phone,address, birth_date});
    res.json(updatedUser);
  } catch (error) {
    console.error('Controller: Erro ao atualizar dados do usuário!');
    console.log(error);
    res.status(500).json({ error: error.message })
  }
}

exports.deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await usersModel.deleteUser(userId);
    // res.status(200).json(`Usuário id ${userId}, foi deletado com sucesso!`);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
}