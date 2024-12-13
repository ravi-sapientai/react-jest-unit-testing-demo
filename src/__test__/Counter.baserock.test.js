const React = require('react');
const { render, fireEvent } = require('@testing-library/react');
const Counter = require('../../src/Counter').default;

describe('Counter Component', () => {
  it('renders initial counter value of 0', () => {
    const { getByTestId } = render(<Counter />);
    const counterElement = getByTestId('counter');
    expect(counterElement.textContent).toBe('0');
  });

  it('increments counter when increment button is clicked', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const counterElement = getByTestId('counter');

    fireEvent.click(incrementButton);
    expect(counterElement.textContent).toBe('1');
  });

  it('decrements counter when decrement button is clicked', () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = getByTestId('decrement');
    const counterElement = getByTestId('counter');

    fireEvent.click(decrementButton);
    expect(counterElement.textContent).toBe('-1');
  });

  it('renders buttons with correct labels', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');

    expect(incrementButton.textContent).toBe('+');
    expect(decrementButton.textContent).toBe('-');
  });

  it('increments multiple times correctly', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const counterElement = getByTestId('counter');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(counterElement.textContent).toBe('3');
  });

  it('decrements multiple times correctly', () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = getByTestId('decrement');
    const counterElement = getByTestId('counter');

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    expect(counterElement.textContent).toBe('-3');
  });

  it('increments and decrements correctly', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    const counterElement = getByTestId('counter');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(counterElement.textContent).toBe('1');
  });
});