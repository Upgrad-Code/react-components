import React from 'react';
import './Folder.css';

const FolderRecurcive = ({ data }) => {
  const hasBranches = data.branches && data.branches.length > 0;
  return (
    <>
      <div>{data.label}</div>
      {hasBranches &&
        data.branches.map((el) => {
          return (
            <div className="sub-menu">
              <FolderRecurcive data={el} />
            </div>
          );
        })}
    </>
  );
};

export default FolderRecurcive;
