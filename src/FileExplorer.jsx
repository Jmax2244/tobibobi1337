import React, { useState } from 'react';
import { fileSystem } from '../data/fileSystem';
import FileTree from './FileTree';
import FileDetails from './FileDetails';

export default function FileExplorer() {
  const [expandedFolders, setExpandedFolders] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <div>
        <h3>Eksplorator plików</h3>
        <FileTree
          data={fileSystem}
          expandedFolders={expandedFolders}
          setExpandedFolders={setExpandedFolders}
          onSelect={setSelectedFile}
          selectedFile={selectedFile}
        />
      </div>
      <div style={{ minWidth: 220 }}>
        <FileDetails file={selectedFile} />
      </div>
    </div>
  );
}