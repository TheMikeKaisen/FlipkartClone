
import React from 'react';

//mui components
import { Box } from '@mui/material';

//components
import Header from './components/Header/header';
import Home from './components/Home/Home';


//context
import DataProvider from './context/DataProvider';
function App() {
  return (
    <DataProvider>
      <Header/>
      <Box>
        <Home/>
      </Box>

    </DataProvider>
  );
}

export default App;
