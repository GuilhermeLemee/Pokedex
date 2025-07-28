// src/components/PokemonCard.jsx
import React from 'react'                // Importa a biblioteca React para criar o componente
import { Link } from 'react-router-dom' // Importa Link para navegação entre páginas sem recarregar o site

// Componente que exibe informações básicas de um Pokémon individual
export default function PokemonCard({ id, name, image }) {
  // name: nome do Pokémon (ex: "bulbasaur")
  // image: URL da imagem do Pokémon
  // id: número usado para montar o link para a página de detalhes

  return (
    <div className="card">
      {/* Link para a página de detalhes do Pokémon */}
      <Link to={`/pokemon/${id}`}>
        {/* Imagem do Pokémon */}
        <img src={image} alt={name} />

        {/* Nome do Pokémon com a primeira letra em maiúscula */}
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </Link>
    </div>
  )
}