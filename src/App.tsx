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
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center flex-wrap p-6 mb-12">
          {/* Info Container */}
          <div className="flex flex-col md:flex-row-reverse items-center flex-1 text-left md:text-left">
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

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-semibold mb-4">
            <h2 className="text-3xl font-bold mb-8">Where I’ve Worked</h2>
            <div className="max-w-6xl mx-auto">
              {/* Smart Home/PropTech Experience */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="flex-1 pl-8 m-8">
                  <p className="text-xl leading-relaxed">
                    5 years scaling SmartRent from startup to public company, pioneering IoT solutions
                    that revolutionized property management through integrated smart home technology,
                    managing over 500,000 connected units and driving product innovation in the PropTech space.
                  </p>
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                  <img
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3"
                    alt="Smart Home Technology"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>

              {/* Insurance Industry Experience */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 pr-8 m-8">
                  <p className="text-xl leading-relaxed">
                    5 years transforming the insurance sector through innovative IT solutions,
                    architecting and developing enterprise-scale applications for policy management,
                    claims processing, and surety bonds across diverse technology stacks.
                  </p>
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
                    alt="Insurance Industry"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>


            </div>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto py-6 text-center">
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
