
import React from 'react';

//mui components
import { Box } from '@mui/material';

//components
import Header from './components/Header/header';
import Home from './components/Home/Home';
import Cart from './components/cart/Cart';


//router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//context
import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
