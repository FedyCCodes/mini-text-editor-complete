// gui/components/Button.jsx
import * as React from 'react';

export function Button(props) {
  return (
    <button className="bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-900 px-3.5 py-2 text-sm font-semibold text-black dark:text-white shadow-sm hover:bg-blue-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" onClick={props.onClick}>
      {props.children}
    </button>
  );
}


