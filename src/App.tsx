import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaAws, FaJava, FaEnvelope, FaGlobe } from 'react-icons/fa';
import {
  SiTypescript,
  SiReact,
  SiElixir,
  SiNodedotjs,
  SiPython,
  SiTerraform,
  SiPostgresql,
  SiLeetcode
} from 'react-icons/si';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Dev from './Dev';
import ApiTester from './components/ApiTester';
import config from './config/env';

function App() {
  const [message, setMessage] = useState('');
  const { backendUrl } = config;

  const [expandedLearnings, setExpandedLearnings] = useState<number[]>([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  // TODO: Get this from the backend
  const recentLearnings = [
    {
      id: 6,
      date: '2024-12-20',
      content: 'I had the opportunity to chat with Donnie from Acorn.io this morning on a zoom call.  I\'m excited to see what they\'re building, it looks like it will be a great way for large companies to use AI to leverage their existing data.',
      links: [
        {
          text: 'Acorn.io',
          url: 'https://www.acorn.io/',
          type: 'website'
        }
      ]
    },
    {
      id: 5,
      date: '2024-12-19',
      content: 'I\'m not a designer, but I\'m learning.  My sister is a recent college grad from NAU for a degree in Graphic Design.  I\'m proud of her and when I implemented her feedback for this website, I was shocked at how much better it looked.',
      links: [
        {
          text: 'Karina\'s Design Feedback',
          url: 'https://www.linkedin.com/in/karina-north-0000000000/',
          type: 'linkedin'
        }
      ]
    },
    {
      id: 4,
      date: '2024-12-18',
      content: 'Wrote a leetcode solution for writing Promise.all() in parallel, with O(n) time & O(n) space complexity.',
      links: [
        {
          text: 'Execute Asynchronous Functions in Parallel',
          url: 'https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solutions/6161593/execute-asynchronous-functions-in-parall-outt',
          type: 'leetcode'
        }
      ]
    },
    {
      id: 3,
      date: '2024-12-17',
      content: 'I was surprised to learn that Chrome browser has no limit on number of promises that can be running at once.  If we don\'t care about durations of a cache existing beyond a single DOM session, it will be faster to use promises for timing out keys than using a Map with expiration dates.',
      links: [
        {
          text: 'Cache With Time Limit',
          url: 'https://leetcode.com/problems/cache-with-time-limit/submissions/1481479162',
          type: 'leetcode'
        }
      ]
    },
    {
      id: 2,
      date: '2024-12-16',
      content: 'Learned javascript\'s native setInterval() executes the given function in the next tick of the event loop.',
      tags: ['javascript', 'til', 'leetcode']
    },
    {
      id: 1,
      date: '2024-12-15',
      content: 'og-image.jpg files can be used for social media link previews. Created mine using a free figma.com account and exported as JPG.',
      tags: ['web', 'seo', 'figma', 'til']
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dev" element={<Dev />} />
        <Route path="/dev/api" element={<ApiTester />} />
        <Route path="/" element={
          <div className="App flex flex-col min-h-screen">
            <header className="flex-1 flex flex-col items-start justify-start bg-gray-800 text-white">
              {/* Hero Section Container */}
              <div className="mx-auto flex flex-col md:flex-row items-start justify-start w-full">
                {/* Content Container */}
                <div className="w-full bg-gray-800">
                  <div className="max-w-6xl mx-auto px-6">
                    {/* Mobile Profile Layout */}
                    <div className="flex flex-col w-full md:hidden py-8">
                      {/* Avatar Container */}
                      <div className="w-[120px] h-[120px] mb-6">
                        <img
                          src={"/kevin-portrait.jpg"}
                          alt="Kevin"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>

                      {/* Info and Social Links */}
                      <div className="flex flex-col w-full">
                        {/* Name and Title */}
                        <div className="flex flex-col mb-6">
                          <h1 className="text-2xl font-semibold mb-1">Kevin North</h1>
                          <p className="text-base text-gray-300 mb-1">
                            Software Engineer
                          </p>
                          <p className="text-sm text-gray-400">
                            SmartRent.com • Nationwide, IT
                          </p>
                        </div>

                        {/* Mobile Social Links - Vertical Layout */}
                        <div className="flex flex-col gap-3 mb-8">
                          <h2 className="text-sm font-semibold text-blue-400">Connect</h2>
                          <a href="https://www.linkedin.com/in/kevin-north"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                            <FaLinkedin size={20} />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                          <a href="https://github.com/northkevin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors">
                            <FaGithub size={20} />
                            <span className="text-sm">GitHub</span>
                          </a>
                          <a href="mailto:contact@northkevin.com"
                            className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors">
                            <FaEnvelope size={20} />
                            <span className="text-sm">Email</span>
                          </a>
                        </div>

                        {/* Mobile Tech Stack Section */}
                        <div className="w-full">
                          <h2 className="text-base font-bold mb-4 text-blue-400">Weapons of Choice</h2>
                          <div className="flex flex-wrap gap-4">
                            <div className="tech-icon-container-small group">
                              <SiTypescript className="w-8 h-8 group-hover:text-blue-500 transition-colors" />
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
                              <SiPostgresql size={30} className="group-hover:text-teal-500 transition-colors" />
                              <span className="tech-label-small">PostgresSQL</span>
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
                              <SiPython size={30} className="group-hover:text-blue-600 transition-colors" />
                              <span className="tech-label-small">Python</span>
                            </div>
                            <div className="tech-icon-container-small group">
                              <FaJava size={30} className="group-hover:text-orange-600 transition-colors" />
                              <span className="tech-label-small">Java</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex w-full py-8">
                      {/* Main Content Area */}
                      <div className="flex-1">
                        {/* Profile Info */}
                        <div className="flex gap-8 mb-8">
                          {/* Avatar */}
                          <div className="w-[250px] flex-shrink-0">
                            <img
                              src={"/kevin-portrait.jpg"}
                              alt="Kevin"
                              className="w-full h-auto aspect-square rounded-full object-cover"
                            />
                          </div>

                          {/* Text Content */}
                          <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-bold mb-2">Hi, I'm Kevin</h1>
                            <p className="text-xl font-semibold">
                              Software engineer and certified duct tape programmer
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-8">
                          <h2 className="text-xl font-bold mb-4 text-blue-400">Weapons of Choice</h2>
                          <div className="flex flex-wrap gap-4">
                            <div className="tech-icon-container-small group">
                              <SiTypescript className="w-8 h-8 group-hover:text-blue-500 transition-colors" />
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
                              <SiPostgresql size={30} className="group-hover:text-teal-500 transition-colors" />
                              <span className="tech-label-small">PostgresSQL</span>
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
                              <SiPython size={30} className="group-hover:text-blue-600 transition-colors" />
                              <span className="tech-label-small">Python</span>
                            </div>
                            <div className="tech-icon-container-small group">
                              <FaJava size={30} className="group-hover:text-orange-600 transition-colors" />
                              <span className="tech-label-small">Java</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Social Links Column */}
                      <div className="w-[200px] flex flex-col gap-4 pl-8 border-l border-gray-700">
                        <h2 className="text-lg font-semibold text-blue-400">Connect</h2>
                        <a href="https://www.linkedin.com/in/kevin-north"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                          <FaLinkedin size={28} />
                          <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/northkevin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors">
                          <FaGithub size={28} />
                          <span>GitHub</span>
                        </a>
                        <a href="mailto:contact@northkevin.com"
                          className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors">
                          <FaEnvelope size={28} />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="w-full bg-gray-900 py-20">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold">
                      What Makes My Experience Different?
                    </h2>
                    <span className="text-xl text-blue-400 mt-2 block">
                      Proven impact across industries
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
                          demonstrating how technical excellence drives bottom-line business impact.
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

              {/* New Brain Upgrades Section */}
              <div className="w-full bg-gray-800 py-20">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold">
                      Brain Upgrades
                    </h2>
                    <span className="text-xl text-blue-400 mt-2 block">
                      Recent learnings and discoveries
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recentLearnings.map((learning) => (
                      <div
                        key={learning.id}
                        className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className={`text-sm text-gray-300 ${expandedLearnings.includes(learning.id) ? '' : 'line-clamp-2'}`}>
                              {learning.content}
                            </p>
                            {learning.content.length > 100 && (
                              <button
                                onClick={() => {
                                  setExpandedLearnings(prev =>
                                    prev.includes(learning.id)
                                      ? prev.filter(id => id !== learning.id)
                                      : [...prev, learning.id]
                                  );
                                }}
                                className="text-xs text-blue-400 hover:text-blue-300 mt-1"
                              >
                                {expandedLearnings.includes(learning.id) ? 'See less' : 'See more'}
                              </button>
                            )}
                          </div>
                          <span className="text-xs text-gray-400 ml-4 whitespace-nowrap">
                            {new Date(learning.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              timeZone: 'UTC'
                            })}
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          {learning?.tags?.length && learning.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 bg-gray-800 text-blue-400 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        {learning.links && learning.links.map(link => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2"
                          >
                            {link.type === 'leetcode' && <SiLeetcode className="w-4 h-4" />}
                            {link.type === 'linkedin' && <FaLinkedin className="w-4 h-4" />}
                            {link.type === 'website' && <FaGlobe className="w-4 h-4" />}
                            {link.text}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="w-full bg-gray-800">
                <div className="max-w-6xl mx-auto px-6 py-8">
                  <div className="flex flex-col items-start space-y-2">
                    <p className="text-sm text-gray-400">
                      Built with React & Tailwind CSS • Deployed on AWS
                    </p>
                    <p className="text-sm text-gray-400">
                      © {new Date().getFullYear()} Kevin North • All rights reserved
                    </p>
                  </div>
                </div>
              </div>

            </header>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
