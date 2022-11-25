import { useState, useEffect } from 'react'
import './App.css'
import Home from './views/Home'
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom"

//installment codes:
// npx create-react-app
// npm install axios
// npm install react-router-dom
// npm init -y
// npm install mongoose express

function App() {

  return (
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  )
}

export default App
