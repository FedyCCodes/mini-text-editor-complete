// gui/components/DataFrame.jsx
import * as React from 'react';

export function DataFrame({className, children}) {
  
  return (
  
    <div className={"bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 overflow-y-scroll h-full" + " " + (className || "")}>
      {children}
    </div>  
    
  );
  
} 

