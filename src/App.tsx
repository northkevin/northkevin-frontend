import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import portrait from './kevin-portrait.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './index.css';

function App() {
  const [message, setMessage] = useState('');
  const backendUrl = 'http://northkevin-backend-2.us-west-1.elasticbeanstalk.com';

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App flex flex-col min-h-screen">
      <header className="flex-1 flex flex-col items-center justify-center bg-gray-800 text-white">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center flex-wrap p-6">
          {/* Info Container */}
          <div className="flex flex-col md:flex-row items-center flex-1 text-left md:text-left">
            <img src={logo} className="min-h-24 max-w-24 App-logo" alt="logo" />
            <div className="ml-4">
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Kevin</h1>
              <p className="text-xl font-semibold mb-4">
                Software engineer and certified duct tape programmer
              </p>
            </div>
          </div>
          {/* Image Container */}
          <div className="flex justify-center mt-6 md:mt-0 flex-1">
            <img
              src={portrait}
              alt="Kevin"
              className="max-w-xl rounded-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto py-6 text-center">
          <p className="text-lg mb-6">Click below to see more</p>
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
              href="https://github.com/northkevin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
