import React from 'react'
// region Styling
import './App.less'
// endregion
// region Router
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
// endregion
// region Pages

// endregion


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
