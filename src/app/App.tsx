import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputPage from './pages/InputPage/InputPage';
import MainPage from './pages/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/input" element={<InputPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
