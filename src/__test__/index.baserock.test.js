const React = require('react');
const ReactDOM = require('react-dom/client');
const App = require('../../src/App');
const Counter = require('../../src/Counter');
const reportWebVitals = require('../../src/reportWebVitals');

// Mock ReactDOM.createRoot
const mockRender = jest.fn();
const mockCreateRoot = jest.fn(() => ({ render: mockRender }));
jest.mock('react-dom/client', () => ({
  createRoot: (el) => mockCreateRoot(el)
}));

jest.mock('../../src/reportWebVitals', () => jest.fn());

describe('index.js', () => {
  let originalConsoleError;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = `
      <div id="root"></div>
      <div id="count"></div>
    `;
  });

  it('renders App component in root element', () => {
    require('../../src/index');
    
    expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById('root'));
    expect(mockRender).toHaveBeenCalledWith(
      expect.objectContaining({
        type: React.StrictMode,
        props: expect.objectContaining({
          children: expect.any(Object),
        }),
      })
    );
  });

  it('renders Counter component in count element', () => {
    require('../../src/index');
    
    expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById('count'));
    expect(mockRender).toHaveBeenCalledWith(
      expect.objectContaining({
        type: React.StrictMode,
        props: expect.objectContaining({
          children: expect.any(Object),
        }),
      })
    );
  });

  it('calls reportWebVitals', () => {
    require('../../src/index');
    
    expect(reportWebVitals).toHaveBeenCalled();
  });

  it('handles missing root element gracefully', () => {
    document.body.innerHTML = '';
    require('../../src/index');
    
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining("Target container is not a DOM element"));
  });

  it('handles missing count element gracefully', () => {
    document.body.innerHTML = '<div id="root"></div>';
    require('../../src/index');
    
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining("Target container is not a DOM element"));
  });
});