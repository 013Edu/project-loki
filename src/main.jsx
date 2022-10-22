import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'

import Main from './components/Main'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='img'>
    <div className='overlay' />
    <Header />
    <Main />
   </div>
  </React.StrictMode>
)
