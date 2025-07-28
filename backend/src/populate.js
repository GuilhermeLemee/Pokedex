require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
const Pokemon = require('./models/Pokemon');

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('🔌 Conectado ao MongoDB');

    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const pokemons = data.results.map(p => ({
      name: p.name,
      url: p.url
    }));

    await Pokemon.insertMany(pokemons, { ordered: false });
    console.log('🏆 151 Pokémons inseridos');
  } catch (err) {
    console.error('❌ Erro ao popular:', err.message);
  } finally {
    process.exit();
  }
}

run();