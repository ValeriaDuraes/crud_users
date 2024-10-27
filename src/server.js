require('dotenv').config();
const express = require('express');
const app = express();
const usersRouter = require('./router/userRouter');

const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/', usersRouter);

// app.get('/', (req, res) => {
//   res.send(`Hello World!!! Tudo certo com o projeto!`)
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
