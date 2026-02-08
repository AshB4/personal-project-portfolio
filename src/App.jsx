import React from 'react'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {
  const projects = [
    {
      title: 'Codex P3 Week 1 Day 1',
      description: 'Introductory JavaScript project focused on core language fundamentals, problem solving, and clean logic structure.',
      link: 'https://github.com/AshB4/CodexP3Week1Day1',
      tech: ['HTML', 'JavaScript']
    },
    {
      title: 'Codex P3 Week 1 Day 2',
      description: 'JavaScript exercises expanding on control flow, functions, and basic application logic.',
      link: 'https://github.com/AshB4/CodexP3W1D2',
      tech: ['HTML', 'JavaScript']
    },
    {
      title: 'Calculate Codex Project',
      description: 'A simple calculator application demonstrating JavaScript logic, DOM manipulation, and user interaction.',
      link: 'https://github.com/AshB4/calculate-codex-proj',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'YodaBot Codex W6D1',
      description: 'Interactive Yoda-themed chatbot project showcasing advanced JavaScript concepts and user interaction patterns.',
      link: 'https://github.com/AshB4/YodaBot-Codex-W6D1',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ]

  return (
    <div className="portfolio">
      <header className="hero">
        <h1>Ashley Broussard</h1>
        <p className="tagline">Front-end focused full stack developer building accessible, user-centered web applications with React, JavaScript, and modern UI frameworks.</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>I'm a front-end focused full stack developer with experience building responsive, accessible web applications using React, JavaScript, Node.js, and modern CSS frameworks. I enjoy turning complex requirements into clean, usable interfaces and have worked across client projects, internal tools, and personal builds. My background includes healthcare, civic tech, and client-driven web work, with a strong focus on usability, accessibility, and real-world problem solving.</p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
