import React, { useState } from 'react';

const mockFiles = [
  {
    name: 'Documents',
    type: 'folder',
    children: [
      { name: 'Moje CV.pdf', type: 'file' },
      { name: 'Notes.txt', type: 'file' },
    ],
  },
  {
    name: 'Photografies',
    type: 'folder',
    children: [
      { name: 'Fotki malych chlopcow.jpg', type: 'file' },
    ],
  },
   {
    name: 'czemó',
    type: 'folder',
    children: [
      { name: 'marcinGortat.jpg', type: 'file' },
    ],
  },
  { name: 'ok.txt', type: 'file' },
];

function FileNode({ node }) {
  const [open, setOpen] = useState(false);

  if (node.type === 'folder') {
    return (
      <div style={{ marginLeft: 16 }}>
        <span style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
          {open ? '📂' : '📁'} {node.name}
        </span>
        {open && node.children && (
          <div>
            {node.children.map((child, idx) => (
              <FileNode key={idx} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <div style={{ marginLeft: 32 }}>
      🗎 {node.name}
    </div>
  );
}

export default function FileExplorer() {
  return (
    <div>
      <h3>Eksplorator plików</h3>
      <div>
        {mockFiles.map((node, idx) => (
          <FileNode key={idx} node={node} />
        ))}
      </div>
    </div>
  );
}