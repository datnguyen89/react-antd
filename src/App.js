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
import LoginPage from './pages/LoginPage'
import ProtectedLayout from './pages/Layouts/ProtectedLayout'
import AuthenticationLayout from './pages/Layouts/AuthenticationLayout'
import { PAGES } from './constant'
// endregion
// region Pages

// endregion
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

const App = () => {
  return (
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
  )
}

export default App
