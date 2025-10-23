import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';

export const MyContext = createContext()

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true)

  const values={
    isDarkMode,
    setIsDarkMode
  }

  return (
    <>
    <MyContext.Provider value={values}>
      <Header/>
      <Container fluid className='App'>
        <h1>Contenido de la Página</h1>
        <p>Este contenido sí está limitado para tener un margen lateral.</p>
        <div style={{ height: '1000px' }}>Espacio para hacer scroll</div>
      </Container>
    </MyContext.Provider>
    </>
  )
    
}

export default App
