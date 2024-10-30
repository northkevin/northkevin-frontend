import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './App.css';



function App() {
  const [message, setMessage] = useState("")
  const backendUrl = 'http://northkevin-backend-2.us-west-1.elasticbeanstalk.com';

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-4xl font-bold mb-4">Kevin is a computer programmer.</h1>
        <p className="text-xl mb-6">Click below to see more</p>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://www.linkedin.com/in/kevin-north"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/northkevin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-800 hover:text-gray-600"
          >
            <FaGithub size={40} />
          </a>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

      </header>
    </div>
  );
}

export default App;
