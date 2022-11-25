import React from 'react';
import FolderRecurcive from './FolderRecurcive';
import folderJson from './folder.json';

const Folder = () => {
  return (
    <div>
      {folderJson &&
        folderJson.map((el) => {
          return <FolderRecurcive data={el} />;
        })}
    </div>
  );
};

export default Folder;
