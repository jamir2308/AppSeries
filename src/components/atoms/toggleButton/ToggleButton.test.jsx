import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleButton from './ToggleButton';

test('Se renderiza sin errores', () => {
  render(<ToggleButton id="test" toggled={false} onChange={() => {}} />);
});

test('Muestra "E" cuando toggled es true', () => {
  const { getByTestId } = render(<ToggleButton id="test" toggled={true} onChange={() => {}} />);
  expect(getByTestId('switch-button')).toHaveTextContent('E');
});

test('Muestra "S" cuando toggled es false', () => {
  const { getByTestId } = render(<ToggleButton id="test" toggled={false} onChange={() => {}} />);
  expect(getByTestId('switch-button')).toHaveTextContent('S');
});

test('Llama a onChange cuando se hace clic en el componente', () => {
  const mockOnChange = jest.fn();
  const { getByTestId } = render(<ToggleButton id="test" toggled={false} onChange={mockOnChange} />);

  fireEvent.click(getByTestId('switch-label'));
  expect(mockOnChange).toHaveBeenCalled();
});
