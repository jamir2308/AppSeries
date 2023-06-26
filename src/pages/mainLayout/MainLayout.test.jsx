import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  Outlet: () => <div>Outlet</div>,
}));

test('Error-free rendering', () => {
    render(
      <MemoryRouter >
        <MainLayout />
      </MemoryRouter>
    );
});

test('Render the Outlet component', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Outlet')).toBeInTheDocument();
});
