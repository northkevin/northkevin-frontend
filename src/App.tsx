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
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [message, setMessage] = useState('');
  const { backendUrl } = config;

  const [expandedLearnings, setExpandedLearnings] = useState<number[]>([]);

  // Define tech stack data
  const techStack = [
    { name: 'TypeScript', icon: SiTypescript, hoverColor: 'text-blue-500' },
    { name: 'React', icon: SiReact, hoverColor: 'text-cyan-400' },
    { name: 'Elixir', icon: SiElixir, hoverColor: 'text-purple-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, hoverColor: 'text-teal-500' },
    { name: 'Node.js', icon: SiNodedotjs, hoverColor: 'text-green-500' },
    { name: 'AWS', icon: FaAws, hoverColor: 'text-orange-400' },
    { name: 'Terraform', icon: SiTerraform, hoverColor: 'text-purple-600' },
    { name: 'Python', icon: SiPython, hoverColor: 'text-blue-600' },
    { name: 'Java', icon: FaJava, hoverColor: 'text-orange-600' }
  ];

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
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/dev" element={<Dev />} />
          <Route path="/dev/api" element={<ApiTester />} />
          <Route path="/" element={
            <div className="App flex flex-col bg-gray-900">
              <main className="w-full">
                {/* Hero Section - Fix background and container issues */}
                <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-24">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]" />
                  </div>

                  <div className="relative container mx-auto px-6 max-w-7xl">
                    {/* Profile and Content Container */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24">
                      {/* Profile Image and Social Links Container */}
                      <div className="relative flex flex-col items-center">
                        {/* Profile Image */}
                        <div className="relative w-48 md:w-64 aspect-square mb-8">
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                          <img
                            src="/kevin-portrait.jpg"
                            alt="Kevin North"
                            className="relative rounded-full object-cover w-full h-full shadow-2xl
                                       ring-2 ring-white/10 transition-transform duration-500
                                       hover:scale-105 hover:ring-blue-400/50"
                          />
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 mt-2">
                          <a href="https://www.linkedin.com/in/kevin-north"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                          >
                            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 
                                            group-hover:opacity-100 transition-all duration-300" />
                            <FaLinkedin className="relative w-6 h-6 text-gray-400 group-hover:text-blue-400 
                                              transform transition-all duration-300 group-hover:scale-110" />
                          </a>
                          <a href="https://github.com/northkevin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                          >
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 
                                            group-hover:opacity-100 transition-all duration-300" />
                            <FaGithub className="relative w-6 h-6 text-gray-400 group-hover:text-white 
                                              transform transition-all duration-300 group-hover:scale-110" />
                          </a>
                          <a href="mailto:contact@northkevin.com"
                            className="group relative"
                          >
                            <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 
                                            group-hover:opacity-100 transition-all duration-300" />
                            <FaEnvelope className="relative w-6 h-6 text-gray-400 group-hover:text-purple-400 
                                              transform transition-all duration-300 group-hover:scale-110" />
                          </a>
                        </div>
                      </div>

                      {/* Hero Content */}
                      <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent 
                                       bg-gradient-to-r from-white to-gray-400">
                          Hi, I'm Kevin
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-gray-400 leading-relaxed">
                          Software engineer crafting elegant solutions at the intersection of
                          <span className="text-gray-200 font-medium"> innovation </span>
                          and
                          <span className="text-gray-200 font-medium"> reliability</span>
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Section */}
                    <div className="w-full max-w-4xl mx-auto">
                      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400/90 to-purple-400/90">
                          Weapons of Choice
                        </span>
                      </h2>
                      <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Tools and technologies I use to build exceptional digital experiences
                      </p>

                      <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {techStack.map((tech) => (
                          <div key={tech.name} className="group relative flex justify-center">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 
                                            rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex flex-col items-center p-4">
                              <tech.icon className={`w-8 h-8 md:w-10 md:h-10 text-gray-400 
                                                 group-hover:${tech.hoverColor} transition-colors duration-300`} />
                              <span className="mt-2 text-xs md:text-sm text-gray-500 text-center
                                             group-hover:text-gray-300 transition-colors duration-300">
                                {tech.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Work Experience Section */}
                <section className="relative w-full bg-[#0A0F1A] py-16 md:py-32">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
                  </div>

                  <div className="relative container mx-auto px-6 max-w-6xl">
                    <div className="space-y-6 mb-24 text-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-white">
                        What Makes My Experience Different?
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Proven impact across industries, from startup innovation to enterprise scale
                      </p>
                    </div>

                    {/* Experience Cards */}
                    <div className="space-y-32">
                      {/* SmartRent Experience */}
                      <div className="group relative">
                        {/* Decorative gradient blur */}
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-500/10 
                                        to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-700 blur-xl" />

                        <div className="relative grid md:grid-cols-2 gap-12 items-center">
                          <div className="order-2 md:order-1 space-y-8">
                            <div className="space-y-4">
                              <a href="https://smartrent.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center group/link"
                              >
                                <h3 className="text-3xl font-semibold bg-clip-text text-transparent 
                                              bg-gradient-to-r from-white to-gray-400">
                                  SmartRent
                                </h3>
                                <svg className="w-6 h-6 ml-2 opacity-0 group-hover/link:opacity-100 
                                              transform group-hover/link:translate-x-1 transition-all"
                                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                              <p className="text-xl leading-relaxed text-gray-300">
                                Scaling from Series B startup to NYSE public company (SMRT), pioneering IoT solutions
                                that revolutionized property management through integrated smart home technology.
                              </p>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-3 gap-6">
                              <div className="space-y-2">
                                <p className="text-3xl font-bold text-blue-400">2.9M+</p>
                                <p className="text-sm text-gray-400">Connected Devices</p>
                              </div>
                              <div className="space-y-2">
                                <p className="text-3xl font-bold text-blue-400">1.3M+</p>
                                <p className="text-sm text-gray-400">Rental Units</p>
                              </div>
                              <div className="space-y-2">
                                <p className="text-3xl font-bold text-blue-400">600+</p>
                                <p className="text-sm text-gray-400">Enterprise Clients</p>
                              </div>
                            </div>
                          </div>

                          <div className="order-1 md:order-2">
                            <div className="relative aspect-video group/image">
                              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl 
                                            group-hover/image:bg-blue-500/30 transition-colors duration-500" />
                              <img
                                src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3"
                                alt="Smart Home Technology"
                                className="relative w-full h-full object-cover rounded-2xl shadow-2xl 
                                          ring-1 ring-white/10 group-hover/image:ring-blue-500/50 
                                          transition-all duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Nationwide Experience */}
                      <div className="py-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div className="order-2 md:order-1 space-y-8">
                            <div className="space-y-6">
                              <a href="https://www.nationwide.com" target="_blank" rel="noopener noreferrer"
                                className="group/link inline-flex items-center">
                                <h3 className="text-3xl font-semibold bg-clip-text text-transparent 
                                              bg-gradient-to-r from-white to-gray-400">
                                  Nationwide Insurance
                                </h3>
                                <svg className="w-6 h-6 ml-2 opacity-0 group-hover/link:opacity-100 
                                              transform group-hover/link:translate-x-1 transition-all"
                                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                              <p className="text-xl leading-relaxed text-gray-300">
                                Led enterprise-scale digital transformation initiatives at a Fortune 100 insurance company,
                                modernizing legacy systems and implementing cloud-native solutions.
                              </p>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-3 gap-6">
                              <div className="space-y-2">
                                <p className="text-3xl font-bold text-blue-400">$50B+</p>
                                <p className="text-sm text-gray-400">Annual Revenue</p>
                              </div>
                              <div className="space-y-2">
                                <p className="text-3xl font-bold text-blue-400">30K+</p>
                                <p className="text-sm text-gray-400">Employees</p>
                              </div>
                              <div className="space-y-2">
                                <p className="text-3xl font-bold text-blue-400">Fortune</p>
                                <p className="text-sm text-gray-400">100 Company</p>
                              </div>
                            </div>
                          </div>

                          <div className="order-1 md:order-2">
                            <div className="relative aspect-video group/image">
                              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl 
                                            group-hover/image:bg-blue-500/30 transition-colors duration-500" />
                              <img
                                src="nationwide-office.jpg"
                                alt="Corporate Office"
                                className="relative w-full h-full object-cover rounded-2xl shadow-2xl 
                                          ring-1 ring-white/10 group-hover/image:ring-blue-500/50 
                                          transition-all duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Brain Upgrades Section */}
                <section className="w-full bg-[#0D1117] py-16 md:py-32">
                  <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Brain Upgrades
                      </h2>
                      <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Recent learnings and discoveries
                      </p>
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
                </section>

                {/* Footer */}
                <footer className="w-full bg-[#0A0F1A] border-t border-gray-800/30">
                  <div className="container mx-auto px-6 py-8 max-w-6xl">
                    <div className="flex flex-col items-start space-y-2">
                      <p className="text-sm text-gray-400">
                        Built with React & Tailwind CSS • Deployed on AWS
                      </p>
                      <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Kevin North • All rights reserved
                      </p>
                    </div>
                  </div>
                </footer>
              </main>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
