import React from 'react'
import Header from './components/layout/Header'
import AppRouter from './routes/AppRouter'
import './assets/styles/theme.css'

const App = () => (
  <div>
    <Header />
    <AppRouter />
  </div>
)

export default App
