import { useState } from 'react'
import Typography from '@mui/material/Typography';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <hgroup>
          <Typography variant='h1' component='h1' data-test='heading'>
            Bookwormers 
          </Typography>
          <Typography variant='h2' component='h2' data-test='heading'>
            Enjoy reading & education  
          </Typography>
        </hgroup>
        
      </div>
    </>
  )
}

export default App
