import React from 'react'
import { MyContext } from '../App';
import { useContext, useState, useEffect } from "react";
import { Container } from 'react-bootstrap';

function Footer() {

  const { isDarkMode, setIsDarkMode } = useContext(MyContext)
  const bgClass = isDarkMode ? "bg-dark" : "bg-light";
  const textClass = isDarkMode ? "text-white" : "text-black";
  return (
    <footer className={`w-100 m-0 p-0 text-center ${bgClass} ${textClass}`}>
      <Container className={`${textClass}`}>

        <p className="mb-1 pt-2">
          &copy; {new Date().getFullYear()} Adrián Sanjuán. Made with love ♡.
        </p>


        <p className={`pb-3 ${textClass}`}>
          <a href="/politica" className="text-decoration-none mx-1">
            Política de Privacidad
          </a>
          <span className="text-muted">|</span>
          <a href="/terminos" className="text-decoration-none mx-1">
            Términos de Uso
          </a>
          <span className="text-muted">|</span>
          <a href="mailto:contacto@app.com" className="text-decoration-none mx-1">
            Contacto
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer