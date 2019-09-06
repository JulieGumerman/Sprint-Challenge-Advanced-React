import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("has dark mode control", () => {
  const doc = render(<App />);
  doc.getByText(/mode/i);
  doc.queryAllByTitle(/dark/i);
});

test("contains title", () => {
  const doc = render(<App />);
  doc.getByText(/soccer/i);
  doc.queryAllByTitle(/header/i);
})


