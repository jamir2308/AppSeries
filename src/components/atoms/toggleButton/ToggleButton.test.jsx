import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleButton from './ToggleButton';

test('Error-free rendering', () => {
  render(<ToggleButton id="test" toggled={false} onChange={() => {}} />);
});

test('Displays "E" when toggled is true', () => {
  const { getByTestId } = render(<ToggleButton id="test" toggled={true} onChange={() => {}} />);
  expect(getByTestId('switch-button')).toHaveTextContent('E');
});

test('Displays "S" when toggled is false', () => {
  const { getByTestId } = render(<ToggleButton id="test" toggled={false} onChange={() => {}} />);
  expect(getByTestId('switch-button')).toHaveTextContent('S');
});

test('Calls onChange when the component is clicked on.', () => {
  const mockOnChange = jest.fn();
  const { getByTestId } = render(<ToggleButton id="test" toggled={false} onChange={mockOnChange} />);

  fireEvent.click(getByTestId('switch-label'));
  expect(mockOnChange).toHaveBeenCalled();
});
