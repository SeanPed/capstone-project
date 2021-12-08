import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/input" element={<h1>Hello World 2</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
