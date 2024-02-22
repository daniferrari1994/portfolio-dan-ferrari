import React from 'react';
import { createRoot } from 'react-dom/client';
import SideMenu from './components/sideMenu';
import MainContent from './components/mainContent';

const App = () => {
  return (
    <>
      <SideMenu />
      <MainContent />
    </>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;