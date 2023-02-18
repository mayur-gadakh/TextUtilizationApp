import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Textinput from './components/Textinput';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";









function App() {
  const [mode, setmode] = useState('light');

  let toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      document.title = 'TextUtils -dark mode'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils -Light Mode'
    }

  }

  return (


    <>

      <NavBar title="TextUtils" about='About TextUtils' mode={mode} toggleMode={toggleMode}></NavBar>
      <Alert alert="This Is Alert"></Alert>
      
      <div className="container">
        <Routes>

          <Route path="/about" element={<About />}>

          </Route>

          <Route path="/" element={<Textinput heading="THIS IS TEXT ANALYZER" input="Input Text" mode={mode}></Textinput>
          }>

          </Route>




        </Routes>
      </div>
    </>




  );
}

export default App;
