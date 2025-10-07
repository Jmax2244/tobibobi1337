import React from 'react';
import FileExplorer from './FileExplorer';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Mój folder</h1>
      <FileExplorer />
    </div>
  );
}

export default App;