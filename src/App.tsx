import React, { useEffect, useState } from 'react';
import portrait from './kevin-portrait.jpg';
import { FaLinkedin, FaGithub, FaAws, FaJava } from 'react-icons/fa';
import {
  SiTypescript,
  SiReact,
  SiElixir,
  SiNodedotjs,
  SiPython,
  SiTerraform,
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
        {/* Hero Section with Intro and Tech Stack */}
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center flex-wrap p-6 mb-20 max-w-7xl w-full">
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
                  <div className="tech-icon-container-small group">
                    <SiPython size={30} className="group-hover:text-purple-600 transition-colors" />
                    <span className="tech-label-small">Python</span>
                  </div>
                  <div className="tech-icon-container-small group">
                    <FaJava size={30} className="group-hover:text-purple-600 transition-colors" />
                    <span className="tech-label-small">Java</span>
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

        {/* Work Experience Section */}
        <div className="w-full bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold">
                What I Can Solve For You
              </h2>
              <span className="text-xl text-blue-400 mt-2 block">
                Real solutions from real experience
              </span>
            </div>

            <div className="grid grid-cols-1 gap-24">
              {/* SmartRent Experience */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-4">
                    <a href="https://smartrent.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <h3 className="text-2xl font-bold">SmartRent</h3>
                      <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-xl leading-relaxed">
                    Scaling SmartRent from Series B startup to NYSE public company (SMRT), wearing multiple hats as developer,
                    tester, and product innovator. Built IoT solutions managing 2.9M+ live connected devices across 1.3M rental
                    units, transforming property management for 600+ enterprise clients. Pioneered smart home technology that
                    revolutionized the PropTech industry, driving adoption from early-stage startup to market leader.
                  </p>
                </div>
                <div className="order-1 md:order-2 aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3"
                    alt="Smart Home Technology"
                    className="w-full h-full object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Nationwide Experience */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2">
                  <div className="flex items-center gap-4 mb-4">
                    <a href="https://www.nationwide.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <h3 className="text-2xl font-bold">Nationwide, IT</h3>
                      <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-xl leading-relaxed">
                    5 years transforming the insurance sector through innovative IT solutions,
                    architecting and developing enterprise-scale applications for policy management,
                    claims processing, and surety bonds across diverse technology stacks.
                    Delivered high-stakes solutions that balanced lightning-fast policy processing,
                    precision-focused claims handling, and complex surety systems,
                    demonstrating how technical excellence drives bottom-line business impact."
                  </p>
                </div>
                <div className="order-1 aspect-video">
                  <img
                    src="/nationwide-09839-0167.jpg"
                    alt="Nationwide IT"
                    className="w-full h-full object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
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
