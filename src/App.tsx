import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaAws, FaJava, FaEnvelope } from 'react-icons/fa';
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

import './index.css';

function App() {
  const [message, setMessage] = useState('');
  const backendUrl = 'http://northkevin-backend-2.us-west-1.elasticbeanstalk.com';

  const [expandedLearnings, setExpandedLearnings] = useState<number[]>([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  // TODO: Get this from the backend
  const recentLearnings = [
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
    <div className="App flex flex-col min-h-screen">
      <header className="flex-1 flex flex-col items-center justify-center bg-gray-800 text-white">
        {/* Hero Section Container */}
        <div className="mx-auto flex flex-col md:flex-row items-start justify-center flex-wrap p-6 mb-20 max-w-7xl w-full">
          {/* Info Container */}
          <div className="flex flex-col flex-1 text-left px-8">
            {/* Main Intro */}
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Kevin</h1>
            <p className="text-xl font-semibold mb-6">
              Software engineer and certified duct tape programmer
            </p>

            {/* Tech Stack Section - adjusted spacing */}
            <div className="w-full mb-8">
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

            {/* Brain Upgrades Section - refined width and spacing */}
            <div className="w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4 text-blue-400">Brain Upgrades</h2>
              <div className="space-y-3">
                {recentLearnings.slice(0, 2).map((learning) => (
                  <div
                    key={learning.id}
                    className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors"
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
                        {link.text}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Container - Now with fixed positioning */}
          <div className="flex flex-col items-center md:items-center flex-1 md:sticky md:top-8">
            <img
              src={"/kevin-portrait.jpg"}
              alt="Kevin"
              className="w-full max-w-[300px] rounded-full mb-6"
            />
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/kevin-north"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/northkevin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:contact@northkevin.com"
                className="text-gray-400 hover:text-gray-600"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
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

        {/* Footer */}
        <div className="mt-auto py-6 text-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-sm text-gray-400">
              Built with React & Tailwind CSS • Deployed on AWS
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kevin North • All rights reserved
            </p>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
