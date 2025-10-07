import React from 'react';
import FolderItem from './FolderItem';
import FileItem from './FileItem';

export default function FileTree({ data, expandedFolders, setExpandedFolders, onSelect, selectedFile }) {
  if (!data) return null;
  return (
    <div>
      {data.type === 'folder' ? (
        <FolderItem
          folder={data}
          expandedFolders={expandedFolders}
          setExpandedFolders={setExpandedFolders}
          onSelect={onSelect}
          selectedFile={selectedFile}
        />
      ) : (
        <FileItem
          file={data}
          onSelect={onSelect}
          selected={selectedFile && selectedFile.id === data.id}
        />
      )}
    </div>
  );
}