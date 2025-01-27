import {
  FaLinkedin,
  FaGithub,
  FaAws,
  FaJava,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiElixir,
  SiNodedotjs,
  SiPython,
  SiTerraform,
  SiPostgresql,
} from "react-icons/si";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./App.css";
import Dev from "./Dev";
import ApiTester from "./components/ApiTester";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { QueryProvider } from "./providers/QueryProvider";
import { RecentLearnings } from "./components/RecentLearnings";

function App() {
  // Define tech stack data
  const techStack = [
    { name: "TypeScript", icon: SiTypescript, hoverColor: "text-blue-500" },
    { name: "React", icon: SiReact, hoverColor: "text-cyan-400" },
    { name: "Elixir", icon: SiElixir, hoverColor: "text-purple-500" },
    { name: "PostgreSQL", icon: SiPostgresql, hoverColor: "text-teal-500" },
    { name: "Node.js", icon: SiNodedotjs, hoverColor: "text-green-500" },
    { name: "AWS", icon: FaAws, hoverColor: "text-orange-400" },
    { name: "Terraform", icon: SiTerraform, hoverColor: "text-purple-600" },
    { name: "Python", icon: SiPython, hoverColor: "text-blue-600" },
    { name: "Java", icon: FaJava, hoverColor: "text-orange-600" },
  ];

  return (
    <ErrorBoundary>
      <QueryProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/dev" element={<Dev />} />
            <Route path="/dev/api" element={<ApiTester />} />
            <Route
              path="/"
              element={
                <div className="App flex flex-col bg-gray-900">
                  <main className="w-full">
                    {/* Hero Section - Add subtle animation and improved typography */}
                    <section
                      className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-24
                                      motion-safe:animate-fadeIn"
                    >
                      {/* Improve gradient subtlety */}
                      <div className="absolute inset-0">
                        <div
                          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]
                                      motion-safe:animate-pulse [animation-duration:8s]"
                        />
                        <div
                          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]
                                      motion-safe:animate-pulse [animation-duration:12s]"
                        />
                      </div>

                      {/* Improve typography spacing and rhythm */}
                      <div className="relative container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24">
                          <div className="relative flex flex-col items-center">
                            {/* Profile image with improved animation */}
                            <div className="relative w-48 md:w-64 aspect-square mb-8 motion-safe:animate-fadeInUp">
                              <div
                                className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl
                                           motion-safe:animate-pulse [animation-duration:4s]"
                              />
                              <img
                                src="/kevin-portrait.jpg"
                                alt="Kevin North"
                                className="relative rounded-full object-cover w-full h-full shadow-2xl
                                       ring-1 ring-white/5 transition-all duration-700
                                       hover:scale-[1.02] hover:ring-blue-400/30
                                       motion-safe:animate-fadeIn"
                              />
                            </div>

                            {/* Social links with improved hover states */}
                            <div className="flex items-center gap-8 mt-4 motion-safe:animate-fadeInUp [animation-delay:200ms]">
                              <a
                                href="https://www.linkedin.com/in/kevin-north"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                              >
                                <div
                                  className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0
                                              group-hover:opacity-100 transition-all duration-300"
                                />
                                <FaLinkedin
                                  className="relative w-6 h-6 text-gray-400 group-hover:text-blue-400
                                                transform transition-all duration-300 group-hover:scale-110"
                                />
                              </a>
                              <a
                                href="https://github.com/northkevin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                              >
                                <div
                                  className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0
                                              group-hover:opacity-100 transition-all duration-300"
                                />
                                <FaGithub
                                  className="relative w-6 h-6 text-gray-400 group-hover:text-white
                                                transform transition-all duration-300 group-hover:scale-110"
                                />
                              </a>
                              <a
                                href="mailto:contact@northkevin.com"
                                className="group relative"
                              >
                                <div
                                  className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0
                                              group-hover:opacity-100 transition-all duration-300"
                                />
                                <FaEnvelope
                                  className="relative w-6 h-6 text-gray-400 group-hover:text-purple-400
                                                transform transition-all duration-300 group-hover:scale-110"
                                />
                              </a>
                            </div>
                          </div>

                          {/* Hero content with improved typography and spacing */}
                          <div className="flex-1 text-center md:text-left space-y-8 motion-safe:animate-fadeInUp [animation-delay:100ms]">
                            <h1
                              className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent
                                           bg-gradient-to-r from-white via-white to-gray-400"
                            >
                              Hi, I'm Kevin
                            </h1>

                            {/* Two-line format for better readability */}
                            <div className="space-y-2">
                              <p className="text-xl md:text-2xl text-gray-400/90 leading-relaxed tracking-wide">
                                <span className="text-gray-400/90">
                                  Building software teaches me to code.
                                </span>
                              </p>
                              <p className="text-xl md:text-2xl leading-relaxed tracking-wide">
                                <span className="text-white/90 font-medium">
                                  Coffee walks with my team{" "}
                                </span>
                                <span className="text-gray-400/90">
                                  teach me{" "}
                                </span>
                                <span className="bg-gradient-to-r from-blue-400/90 to-purple-400/90 bg-clip-text text-transparent font-medium">
                                  everything else
                                </span>
                                <span className="text-gray-400/90">.</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="w-full py-20 md:py-32">
                      <div className="w-full max-w-4xl mx-auto px-6">
                        <div className="text-center space-y-4 mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400/90 to-purple-400/90">
                              Weapons of Choice
                            </span>
                          </h2>
                          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                            Tools and technologies I use to build exceptional
                            digital experiences
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
                          {techStack.map((tech) => (
                            <div
                              key={tech.name}
                              className="group relative flex flex-col items-center"
                            >
                              {/* Hover effect background */}
                              <div
                                className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10
                                           rounded-2xl blur-xl opacity-0 group-hover:opacity-100
                                           transition-all duration-500"
                              />

                              {/* Icon container */}
                              <div className="relative flex flex-col items-center p-4">
                                <tech.icon
                                  className={`w-8 h-8 md:w-10 md:h-10 ${tech.hoverColor} transition-all duration-300`}
                                />
                                <span className="mt-3 text-xs md:text-sm text-gray-500 text-center">
                                  {tech.name}
                                </span>
                              </div>
                            </div>
                          ))}
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
                            Proven impact across industries, from startup
                            innovation to enterprise scale
                          </p>
                        </div>

                        {/* Experience Cards */}
                        <div className="space-y-32">
                          {/* SmartRent Experience */}
                          <div className="group relative">
                            {/* Decorative gradient blur */}
                            <div
                              className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-500/10
                                          to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100
                                          transition-opacity duration-700 blur-xl"
                            />

                            <div className="relative grid md:grid-cols-2 gap-12 items-center">
                              <div className="order-2 md:order-1 space-y-8">
                                <div className="space-y-4">
                                  <a
                                    href="https://smartrent.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center hover:opacity-80 transition-opacity"
                                  >
                                    <h3 className="text-3xl font-semibold bg-clip-text text-white">
                                      SmartRent
                                    </h3>
                                    <div
                                      className="ml-3 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm
                                       group-hover/link:bg-gray-700/50 transition-colors duration-300"
                                    >
                                      <svg
                                        className="w-5 h-5 text-gray-400 group-hover/link:text-white
                                                  transform group-hover/link:translate-x-0.5 transition-all"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={1.5}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <p className="text-xl leading-relaxed text-gray-300">
                                    Scaling from Series B startup to NYSE public
                                    company (SMRT), pioneering IoT solutions
                                    that revolutionized property management
                                    through integrated smart home technology.
                                  </p>
                                </div>

                                {/* SmartRent Key Metrics */}
                                <div className="grid grid-cols-3 gap-6 justify-items-start">
                                  <div className="metric-container space-y-2">
                                    <p className="metric-value gradient-text-left">
                                      1.9M+
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      Connected Devices
                                    </p>
                                  </div>
                                  <div className="metric-container space-y-2">
                                    <p className="metric-value gradient-text-middle">
                                      1.1M+
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      Rental Units
                                    </p>
                                  </div>
                                  <div className="metric-container space-y-2">
                                    <p className="metric-value gradient-text-right">
                                      400+
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      Enterprise Clients
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="order-1 md:order-2">
                                {/* Work Experience Image */}
                                <div className="relative aspect-video group/image overflow-hidden rounded-2xl">
                                  {/* Subtle glow effect */}
                                  <div
                                    className="absolute inset-0 bg-blue-500/20 blur-2xl
                                                  group-hover/image:bg-blue-500/30 transition-colors duration-500"
                                  />

                                  {/* Image with parallax effect */}
                                  <div
                                    className="relative transform transition-transform duration-700 ease-out
                                                  group-hover/image:scale-105 group-hover/image:translate-y-[-2%]"
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3"
                                      alt="Smart Home Technology"
                                      className="w-full h-full object-cover rounded-2xl shadow-2xl
                                                      ring-1 ring-white/10 group-hover/image:ring-blue-500/50
                                                      transition-all duration-700"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Nationwide Experience */}
                          <div className="group relative">
                            {/* Decorative gradient blur */}
                            <div
                              className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-500/10
                                          to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100
                                          transition-opacity duration-700 blur-xl"
                            />

                            <div className="relative grid md:grid-cols-2 gap-12 items-center">
                              <div className="order-2 md:order-1 space-y-8">
                                <div className="space-y-6">
                                  <a
                                    href="https://www.nationwide.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center hover:opacity-80 transition-opacity"
                                  >
                                    <h3
                                      className="text-3xl font-semibold bg-clip-text text-transparent
                                                text-white"
                                    >
                                      Nationwide Insurance
                                    </h3>
                                    <div
                                      className="ml-3 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm
                                       group-hover/link:bg-gray-700/50 transition-colors duration-300"
                                    >
                                      <svg
                                        className="w-5 h-5 text-gray-400 group-hover/link:text-white
                                                  transform group-hover/link:translate-x-0.5 transition-all"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={1.5}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <p className="text-xl leading-relaxed text-gray-300">
                                    Led enterprise-scale digital transformation
                                    initiatives at a Fortune 100 insurance
                                    company, modernizing legacy systems and
                                    implementing cloud-native solutions.
                                  </p>
                                </div>

                                {/* Nationwide Key Metrics */}
                                <div className="grid grid-cols-3 gap-6 justify-items-start">
                                  <div className="metric-container space-y-2">
                                    <p className="metric-value gradient-text-left">
                                      $48.7B
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      Annual Revenue
                                    </p>
                                  </div>
                                  <div className="metric-container space-y-2">
                                    <p className="metric-value gradient-text-middle">
                                      25K+
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      Employees
                                    </p>
                                  </div>
                                  <div className="metric-container space-y-2">
                                    <p className="metric-value gradient-text-right">
                                      Fortune
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      100 Company
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="order-1 md:order-2">
                                {/* Work Experience Image */}
                                <div className="relative aspect-video group/image overflow-hidden rounded-2xl">
                                  {/* Subtle glow effect */}
                                  <div
                                    className="absolute inset-0 bg-blue-500/20 blur-2xl
                                                  group-hover/image:bg-blue-500/30 transition-colors duration-500"
                                  />
                                  <img
                                    src="/nationwide-office.jpg"
                                    alt="Corporate Office"
                                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl
                                                    ring-1 ring-white/10 group-hover/image:ring-blue-500/50
                                                    transition-all duration-700"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Brain Upgrades Section */}
                    <section className="w-full bg-[#0D1117] py-16 md:py-32 overflow-hidden">
                      <div className="container mx-auto px-6 max-w-6xl">
                        {/* Header with improved alignment */}
                        <div className="mb-16 text-center">
                          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Brain Upgrades
                          </h2>
                          <p
                            className="text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400
                                      bg-clip-text text-transparent max-w-2xl mx-auto"
                          >
                            Recent learnings and discoveries
                          </p>
                        </div>
                        <RecentLearnings />
                      </div>
                    </section>

                    {/* Footer with improved design and animations */}
                    <footer className="relative w-full bg-[#0A0F1A] border-t border-gray-800/30 overflow-hidden">
                      {/* Subtle gradient background */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.02] to-transparent" />
                      </div>

                      <div className="relative container mx-auto px-6 py-12 max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-8 items-start">
                          {/* Branding */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">
                              Kevin North
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              Software engineer crafting elegant solutions for
                              complex problems
                            </p>
                          </div>

                          {/* Quick Links */}
                          <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-400">
                              Quick Links
                            </h3>
                            <div className="flex flex-col space-y-2">
                              <a
                                href="https://github.com/northkevin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                              >
                                GitHub Projects
                              </a>
                              <a
                                href="https://www.linkedin.com/in/kevin-north"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                              >
                                LinkedIn Profile
                              </a>
                              <a
                                href="mailto:contact@northkevin.com"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                              >
                                Contact
                              </a>
                            </div>
                          </div>

                          {/* Tech Stack */}
                          <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-400">
                              Built With
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              <span
                                className="text-xs px-2.5 py-1 bg-gray-800/50 text-gray-400 rounded-full
                                          ring-1 ring-gray-700/50 backdrop-blur-sm"
                              >
                                React
                              </span>
                              <span
                                className="text-xs px-2.5 py-1 bg-gray-800/50 text-gray-400 rounded-full
                                          ring-1 ring-gray-700/50 backdrop-blur-sm"
                              >
                                TypeScript
                              </span>
                              <span
                                className="text-xs px-2.5 py-1 bg-gray-800/50 text-gray-400 rounded-full
                                          ring-1 ring-gray-700/50 backdrop-blur-sm"
                              >
                                Tailwind CSS
                              </span>
                              <span
                                className="text-xs px-2.5 py-1 bg-gray-800/50 text-gray-400 rounded-full
                                          ring-1 ring-gray-700/50 backdrop-blur-sm"
                              >
                                AWS
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Copyright */}
                        <div className="mt-12 pt-8 border-t border-gray-800/30">
                          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-gray-500">
                              © {new Date().getFullYear()} Kevin North. All
                              rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                              <a
                                href="#privacy"
                                className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                              >
                                Privacy Policy
                              </a>
                              <a
                                href="#terms"
                                className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                              >
                                Terms of Use
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </main>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </ErrorBoundary>
  );
}

export default App;
