import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('Se renderiza sin errores', () => {
    render(<MemoryRouter>
        <Header setLocale={() => { }} />
    </MemoryRouter>);
});


test('handleLocation se llama con el argumento correcto al hacer clic en NavMenuList', () => {
    function TestComponent({ page }) {
        return <h1 data-testid={page}>{page}</h1>;
    }
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Header setLocale={() => { }} />
            <Routes>
                <Route path="/rickandmorty" element={<TestComponent page="rickandmorty" />} />
                <Route path="/simpsons" element={<TestComponent page="simpsons" />} />
            </Routes>
        </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Rick and Morty'));
    expect(screen.getByTestId('rickandmorty')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Simpsons'));
    expect(screen.getByTestId('simpsons')).toBeInTheDocument();
});
