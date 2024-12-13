import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

// Mock the CSS import
jest.mock('../../src/App.css', () => ({}));

// Mock the logo import
jest.mock('../../src/logo.svg', () => 'mocked-logo.svg');

describe('App Component', () => {
  it('renders the logo with correct attributes', () => {
    render(<App />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', 'mocked-logo.svg');
    expect(logoElement).toHaveAttribute('alt', 'logo');
    expect(logoElement).toHaveClass('App-logo');
  });

  it('renders the main text content', () => {
    render(<App />);
    const codeElement = screen.getByText('src/App.js');
    expect(codeElement).toBeInTheDocument();
    expect(codeElement.tagName.toLowerCase()).toBe('code');
    
    const pElement = codeElement.closest('p');
    expect(pElement).toHaveTextContent(/Edit src\/App\.js and save to reload\./i);
  });

  it('renders the learn react link with correct attributes', () => {
    render(<App />);
    const linkElement = screen.getByTestId('app-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkElement).toHaveClass('App-link');
    expect(linkElement).toHaveTextContent('Learn React');
  });

  it('renders the App component without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('App');
  });

  // Additional test to increase coverage
  it('renders the App-header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('App-header');
  });
});