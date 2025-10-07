import React, { useState } from 'react';
import FileItem from './FileItem';

export default function FolderItem({ folder, expandedFolders, setExpandedFolders, onSelect, selectedFile }) {
  const isExpanded = expandedFolders.includes(folder.id);

  const handleToggle = () => {
    setExpandedFolders(isExpanded
      ? expandedFolders.filter(id => id !== folder.id)
      : [...expandedFolders, folder.id]
    );
  };

  return (
    <div style={{ marginLeft: 16 }}>
      <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={handleToggle}>
        {isExpanded ? '▼' : '▶'} 📁 {folder.name}
      </span>
      {isExpanded && folder.children && (
        <div>
          {folder.children.map(child =>
            child.type === 'folder' ? (
              <FolderItem
                key={child.id}
                folder={child}
                expandedFolders={expandedFolders}
                setExpandedFolders={setExpandedFolders}
                onSelect={onSelect}
                selectedFile={selectedFile}
              />
            ) : (
              <FileItem
                key={child.id}
                file={child}
                onSelect={onSelect}
                selected={selectedFile && selectedFile.id === child.id}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}