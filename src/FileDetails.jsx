import React from 'react';

export default function FileDetails({ file }) {
  if (!file) return null;
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, marginTop: 16 }}>
      <h4>struktury organizacyjno epidemiologiczne tego pliku.</h4>
      <p><strong>Nazwa:</strong> {file.name}</p>
      <p><strong>typie co ty:</strong> {file.type}</p>
      <p><strong>Grubość:</strong> {file.size}</p>
    </div>
  );
}