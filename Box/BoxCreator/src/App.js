import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import MessageDisplayComponent from './Components/MessageDisplayComponent';
import MessageFormComponent from './Components/MessageFormComponent';
import React, {useState} from 'react'


function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg(currentMsg.concat(newMessage));
}

  return (
    <div className="App">
      <HeaderComponent/>
      <MessageDisplayComponent message={currentMsg}/>
      <MessageFormComponent youveGotMail={youveGotMail}/>
    </div>
  );
}

export default App;
