import React, { useEffect } from 'react';
import SplitLayout from './components/Layout/SplitLayout';

function App() {
  useEffect(() => {
    document.title = 'それでも異国暮らし';
  }, []);

  return (
    <SplitLayout imageUrl="/cover.webp" />
  );
}

export default App;