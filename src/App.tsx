import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import portrait from './kevin-portrait.jpg';
import { FaLinkedin, FaGithub, FaAws, FaJava } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiElixir,
  SiPhoenixframework,
  SiNodedotjs,
  SiPython,
  // SiAws,
  SiTerraform,
  // SiJava
} from 'react-icons/si';

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
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center flex-wrap p-6 mb-12 max-w-7xl w-full">
          {/* Info + Tech Stack Container */}
          <div className="flex flex-col flex-1 text-left px-8">
            <div className="w-full mb-8">
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Kevin</h1>
              <p className="text-xl font-semibold mb-6">
                Software engineer and certified duct tape programmer
              </p>

              {/* Tech Stack Section */}
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4 text-blue-400">Weapons of Choice</h2>
                <div className="flex flex-wrap gap-4">
                  <div className="tech-icon-container-small group">
                    <SiTypescript size={30} className="group-hover:text-blue-500 transition-colors" />
                    <span className="tech-label-small">TypeScript</span>
                  </div>
                  <div className="tech-icon-container-small group">
                    <SiReact size={30} className="group-hover:text-cyan-400 transition-colors" />
                    <span className="tech-label-small">React</span>
                  </div>
                  <div className="tech-icon-container-small group">
                    <SiElixir size={30} className="group-hover:text-purple-500 transition-colors" />
                    <span className="tech-label-small">Elixir</span>
                  </div>
                  <div className="tech-icon-container-small group">
                    <SiNodedotjs size={30} className="group-hover:text-green-500 transition-colors" />
                    <span className="tech-label-small">Node.js</span>
                  </div>
                  <div className="tech-icon-container-small group">
                    <FaAws size={30} className="group-hover:text-orange-400 transition-colors" />
                    <span className="tech-label-small">AWS</span>
                  </div>
                  <div className="tech-icon-container-small group">
                    <SiTerraform size={30} className="group-hover:text-purple-600 transition-colors" />
                    <span className="tech-label-small">Terraform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex justify-center md:justify-end flex-1">
            <img
              src={portrait}
              alt="Kevin"
              className="max-w-md rounded-full"
            />
          </div>
        </div>

        {/* Smart Home/PropTech Experience */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="flex-1 md:pl-16 px-8">
            <p className="text-xl leading-relaxed">
              5 years scaling SmartRent from startup to public company, pioneering IoT solutions
              that revolutionized property management through integrated smart home technology,
              managing over 500,000 connected units and driving product innovation in the PropTech space.
            </p>
          </div>
          <div className="flex-1 mt-6 md:mt-0 px-8">
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3"
              alt="Smart Home Technology"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* Insurance Industry Experience */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="flex-1 md:pr-16 px-8">
            <p className="text-xl leading-relaxed">
              5 years transforming the insurance sector through innovative IT solutions,
              architecting and developing enterprise-scale applications for policy management,
              claims processing, and surety bonds across diverse technology stacks.
            </p>
          </div>
          <div className="flex-1 mt-6 md:mt-0 px-8">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
              alt="Insurance Industry"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
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
