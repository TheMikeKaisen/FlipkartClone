
import React from 'react';

//mui components
import { Box } from '@mui/material';

//components
import Header from './components/Header/header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Box>
        <Home/>
      </Box>

    </div>
  );
}

export default App;
