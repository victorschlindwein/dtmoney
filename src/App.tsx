import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <h1>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </h1>
    </>
  );
}