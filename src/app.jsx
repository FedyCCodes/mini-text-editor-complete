// app.jsx
import * as React from 'react';
import { createRoot } from "react-dom";
import { MainLayout } from "./gui/MainLayout";

function App() {
  return (
    <MainLayout/>
  );
}

const root = createRoot(document.body);
root.render(<App/>);