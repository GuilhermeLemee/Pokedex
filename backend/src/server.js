require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const pokemonsRoutes = require('./routes/pokemons');

const app = express();
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('🔥 Conectado ao MongoDB'))
  .catch(err => {
    console.error('Erro ao conectar:', err);
    process.exit(1);
  });

// Rotas
app.use('/pokemons', pokemonsRoutes);

// Levanta o servidor
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`🚀 Server rodando em http://localhost:${port}`)
);
