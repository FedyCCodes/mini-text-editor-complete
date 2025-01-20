// gui/Editor.jsx
import * as React from 'react';
import AceEditor from "react-ace";

const fs = require("fs");

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";

export function Editor({filePath, code, setCode}) {
  
  React.useEffect(function(){
    
    console.log("Changing Value of file path!", filePath);
    
    if (filePath) setCode(fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' }));
    
  }, [filePath])
  
  return (
    
    <AceEditor
      mode="javascript"
      theme={"dracula"/*"xcode"*/}
      onChange={function onChange(newValue) {
        setCode(newValue);
      }}
      name="UNIQUE_ID_OF_DIV"
      value={code}
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="100%"
    />
  );
  
}


