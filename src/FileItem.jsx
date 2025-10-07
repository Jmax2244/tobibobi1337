import React from 'react';

export default function FileItem({ file, onSelect, selected }) {
  return (
    <div
      style={{
        marginLeft: 32,
        cursor: 'pointer',
        background: selected ? '#e0f7fa' : 'transparent'
      }}
      onClick={() => onSelect(file)}
    >
      🗎 {file.name}
    </div>
  );
}