import React from 'react';
import { createRoot } from 'react-dom/client';
import SideMenu from './components/sideMenu';

const App = () => {
  return (
    <>
      <SideMenu />
    </>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;