//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react'
import Alert from './component/Alert';
import Info from './component/Info';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("DARK MODE HAS BEEN ENABLED" , "SUCCESS");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("LIGHT MODE HAS BEEN ENABLED" , "SUCCESS");
    }
  }
  return (
         <>
         <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
         <Alert alert={alert}/>
          <Textform heading= "ENTER TEXT BELOW TO ANALYZE" showAlert={showAlert} mode={mode}/>
          <Info mode={mode}/>       
         
         </>
  );
  }


export default App;
