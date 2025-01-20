// gui/files/TreeList.jsx
import * as React from 'react';
import { TreeListRecursive } from "./TreeListRecursive";

export function TreeList({directory, setFilePath}) {
  
  return (
    <>
    { directory != null ? <TreeListRecursive directory={directory} setFilePath={setFilePath}/> : (
      <span className="text-center font-light m-auto">No Directory Selected</span>
    )}
      <pre>{directory}</pre>
    </>
  );
  
}

