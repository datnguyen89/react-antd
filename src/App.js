import React from 'react'
// region Styling
import './App.css'
import ThemeProvider from './provider/ThemeProvider'

// endregion
// region Router
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

// endregion
// region Pages
import { PAGES } from './constant'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import ProtectedLayout from './pages/Layouts/ProtectedLayout'
import AuthenticationLayout from './pages/Layouts/AuthenticationLayout'

// endregion


const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthenticationLayout />}>
            <Route path={PAGES.LOGIN} element={<LoginPage />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route path={PAGES.HOME} element={<HomePage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
