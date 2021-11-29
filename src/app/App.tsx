import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <body>
      <Card />
    </body>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Card />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
