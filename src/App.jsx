import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Bookshelf from './components/Bookshelf';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bookshelf" element={<Bookshelf/>} />
        <Route path="*" element={<></>} />
      </Routes>
    </>
  )
}

export default App