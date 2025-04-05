import { useState } from 'react'
import Typography from '@mui/material/Typography';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
      <div className='App'>
        <hgroup>
          <Typography variant='h1' component='h1' data-test='heading'>
            Bookwormers 
          </Typography>
          <Typography variant='h2' component='h2' data-test='subheading'>
            Enjoy Reading & Level Up Yourself  
          </Typography>
        </hgroup>
        
      </div>
    </>
  )
}

export default App
