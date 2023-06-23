import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  Outlet: () => <div>Outlet</div>,
}));

test('Se renderiza sin errores', () => {
    render(
      <MemoryRouter >
        <MainLayout />
      </MemoryRouter>
    );
});

test('Renderiza el componente Outlet', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Outlet')).toBeInTheDocument();
});
