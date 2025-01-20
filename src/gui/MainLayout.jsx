// gui/MainLayout.jsx
import * as React from 'react';
import { MainHeader } from "./MainHeader";
import { MainBody } from "./MainBody";

export function MainLayout() {
  
  const [directory, setDirectory] = React.useState(null);
  const [filePath, setFilePath] = React.useState(null);
  
  const [code, setCode] = React.useState("");
  
  return (
    <>
      <MainHeader code={code} directory={directory} setDirectory={setDirectory} filePath={filePath} setFilePath={setFilePath}/>
      <MainBody code={code} setCode={setCode} directory={directory} filePath={filePath} setFilePath={setFilePath}/>
    </>
    
  );
  
}

