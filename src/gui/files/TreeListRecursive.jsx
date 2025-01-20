// gui/files/TreeListRecursive.jsx
import * as React from 'react';
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { cacheDirectory } from "../../files/cacheDirectory";

export function TreeListRecursive({directory, setFilePath}) {
  
  const [displayItems, setDisplayItems] = React.useState(false);
  
  const items = cacheDirectory(directory);
  
  console.log(items);
  
  return (
    <>
      <li className="flex" onClick={function(){
        
        setDisplayItems(!displayItems);
        
      }}><FolderIcon height="16" className="m-1"/> {directory.split("/").pop()}</li>
      {displayItems ? (
      <ul className={"list-inside pl-4"}>
        {items.map( item => {
          
          return item.isDirectory ? (
            <TreeListRecursive directory={directory + "/" + item.name} setFilePath={setFilePath}/>
          ) : 
          (
            <li className="flex" onClick={function(){
              
              setFilePath(directory + "/" + item.name);
              
            }}><DocumentIcon height="16" className="m-1"/> {item.name}</li>
          );
        })}
      </ul>
      ) : null}
    </>
  );
  
}

