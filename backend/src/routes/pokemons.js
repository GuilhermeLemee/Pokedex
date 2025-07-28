const express = require('express');
const Pokemon = require('../models/Pokemon');

const router = express.Router();

// Listar todos os Pokémons
router.get('/', async (req, res) => {
  const list = await Pokemon.find();
  res.json(list);
});

// Obter um Pokémon por ID
router.get('/:id', async (req, res) => {
  const p = await Pokemon.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Não encontrado' });
  res.json(p);
});

// Criar novo Pokémon
router.post('/', async (req, res) => {
  const newP = await Pokemon.create(req.body);
  res.status(201).json(newP);
});

// Atualizar Pokémon existente
router.put('/:id', async (req, res) => {
  const updated = await Pokemon.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Deletar Pokémon
router.delete('/:id', async (req, res) => {
  await Pokemon.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;