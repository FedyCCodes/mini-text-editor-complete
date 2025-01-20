// files/cacheDirectory.js
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AceEditor from "react-ace";
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/solid'
const { shell, ipcRenderer } = require("electron"); // deconstructing assignment
const fs = require("fs");


let cachedDirectories = {};


export function cacheDirectory(directory) {
  
  if (cachedDirectories[directory]) return cachedDirectories[directory];
  
  const items = fs.readdirSync(directory, { withFileTypes: true }).map(d => {
    
    return { 
      name: d.name,
      isFile: d.isFile(),
      isDirectory: d.isDirectory()
      
    }
    
  }).sort( (a,b) => (
    b.isDirectory - a.isDirectory
  ));
  
  cachedDirectories[directory] = items;
  
  return items;
  
}


