// gui/MainBody.jsx
import * as React from 'react';
import { DataFrame } from './components/DataFrame';
import { TreeList } from './files/TreeList';
import { Editor } from './Editor';


export function MainBody({directory, filePath, setFilePath, code, setCode}) {
  return (
    <div className="flex pt-16  overflow-hidden h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <main className="p-2 grid gap-2 grid-cols-3 h-full">
          
              <DataFrame>
                <TreeList directory={directory} setFilePath={setFilePath}/>
              </DataFrame>
              <DataFrame className="col-span-2">
                <Editor code={code} setCode={setCode} filePath={filePath}/>
              </DataFrame>
              
        </main>
      </div>
    </div>
  );
} 

