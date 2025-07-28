import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home'

test('Home carrega e exibe container de grid', () => {
  const { container } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  // o Home sempre renderiza um <div class="grid">, mesmo vazio
  expect(container.firstChild).toHaveClass('grid')
})