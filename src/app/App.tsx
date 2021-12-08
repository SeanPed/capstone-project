import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>}></Route>
        <Route path="/input" element={<h1>Hello World 2</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
